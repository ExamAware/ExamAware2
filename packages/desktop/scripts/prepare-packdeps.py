#!/usr/bin/env python3
"""
Prepare dependencies for packaging desktop app.
Clears and reinstalls to avoid packaging stale/cached deps.
"""

import os
import sys
import subprocess
import tempfile
import shutil
import stat
from pathlib import Path

def create_husky_stub():
    """Create a temporary husky stub to bypass pre-commit hooks."""
    temp_dir = tempfile.mkdtemp(prefix='examaware-packdeps-')
    husky_bin = Path(temp_dir) / 'husky'
    husky_bin.write_text('#!/usr/bin/env node\nprocess.exit(0)\n')
    husky_bin.chmod(0o755)
    return temp_dir

def find_pnpm():
    """Find pnpm executable in PATH or common locations."""
    # Try npm_execpath first
    npm_execpath = os.environ.get('npm_execpath')
    if npm_execpath and (Path(npm_execpath).exists() or shutil.which(npm_execpath)):
        return npm_execpath

    # Try PNPM_HOME
    pnpm_home = os.environ.get('PNPM_HOME')
    if sys.platform == 'win32' and not pnpm_home:
        # GitHub Actions default on Windows
        pnpm_home = r'C:\Users\runneradmin\setup-pnpm\node_modules\.bin'

    if pnpm_home:
        for name in ['pnpm.exe', 'pnpm.cmd', 'pnpm']:
            candidate = Path(pnpm_home) / name
            if candidate.exists():
                return str(candidate)

    # Use shutil.which for PATH search
    pnpm = shutil.which('pnpm')
    if pnpm:
        return pnpm

    raise FileNotFoundError('pnpm not found in PATH or PNPM_HOME')

def run_cmd(cmd, args, env=None):
    """Run command with error handling."""
    full_env = os.environ.copy()
    if env:
        full_env.update(env)

    try:
        result = subprocess.run(
            [cmd] + args,
            cwd=os.path.dirname(__file__) or '.',
            env=full_env,
            check=True,
            capture_output=False
        )
        return result.returncode
    except FileNotFoundError as e:
        print(f'[prepare-packdeps] Command not found: {cmd}', file=sys.stderr)
        raise
    except subprocess.CalledProcessError as e:
        print(f'[prepare-packdeps] Command failed: {cmd} {" ".join(args)}', file=sys.stderr)
        raise

def main():
    """Main cleanup and reinstall logic."""
    cwd = Path(__file__).parent.parent
    husky_stub = create_husky_stub()

    try:
        pnpm = find_pnpm()
        print(f'[prepare-packdeps] Found pnpm: {pnpm}', file=sys.stderr)

        # Clean node_modules
        node_modules = cwd / 'node_modules'
        if node_modules.exists():
            print(f'[prepare-packdeps] Removing {node_modules}', file=sys.stderr)
            shutil.rmtree(node_modules)

        # Reinstall with husky bypass
        print('[prepare-packdeps] Installing dependencies...', file=sys.stderr)
        env = {'PATH': f'{husky_stub}{os.pathsep}{os.environ.get("PATH", "")}' }
        run_cmd(pnpm, ['install', '--frozen-lockfile'], env)

        print('[prepare-packdeps] Done!', file=sys.stderr)
        return 0

    finally:
        # Cleanup husky stub
        if Path(husky_stub).exists():
            shutil.rmtree(husky_stub)

if __name__ == '__main__':
    sys.exit(main() or 0)
