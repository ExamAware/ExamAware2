# Reminder sound assets

These short cues are used for reminder sounds in the desktop player:

- `exam-start.mp3`: a clean ascending two-note cue
- `exam-alert.mp3`: a gentle repeated attention cue
- `exam-end.mp3`: a concise descending resolution

## Provenance and license

The files were generated locally with FFmpeg's `sine` and `anullsrc` filters. They
contain no third-party audio, samples, recordings, or other imported media. The
MP3 files are distributed under the same license as the repository.

The source tones are mono, normalized to `-29 LUFS` with a `-6 dBTP` ceiling,
and faded at their boundaries. They were encoded with `libmp3lame` at 128
kbit/s. From the repository root, the exact generation commands are:

```sh
ffmpeg -hide_banner -loglevel error -y -f lavfi -i 'sine=frequency=523.25:sample_rate=44100:duration=0.34' -f lavfi -i 'sine=frequency=659.25:sample_rate=44100:duration=0.46' -filter_complex '[0:a]afade=t=in:d=0.015,afade=t=out:st=0.31:d=0.03[a0];[1:a]afade=t=in:d=0.015,afade=t=out:st=0.39:d=0.07[a1];[a0][a1]concat=n=2:v=0:a=1,loudnorm=I=-29:TP=-6:LRA=7[a]' -map '[a]' -map_metadata -1 -ar 44100 -ac 1 -c:a libmp3lame -b:a 128k -write_xing 0 packages/desktop/src/renderer/public/audio/exam-start.mp3

ffmpeg -hide_banner -loglevel error -y -f lavfi -i 'sine=frequency=698.46:sample_rate=44100:duration=0.20' -f lavfi -i 'anullsrc=r=44100:cl=mono:d=0.12' -filter_complex '[0:a]afade=t=in:d=0.02,afade=t=out:st=0.14:d=0.06,asplit=3[p0][p1][p2];[p0][1:a][p1][1:a][p2]concat=n=5:v=0:a=1,loudnorm=I=-29:TP=-6:LRA=7[a]' -map '[a]' -map_metadata -1 -ar 44100 -ac 1 -c:a libmp3lame -b:a 128k -write_xing 0 packages/desktop/src/renderer/public/audio/exam-alert.mp3

ffmpeg -hide_banner -loglevel error -y -f lavfi -i 'sine=frequency=659.25:sample_rate=44100:duration=0.25' -f lavfi -i 'sine=frequency=523.25:sample_rate=44100:duration=0.30' -f lavfi -i 'sine=frequency=392.00:sample_rate=44100:duration=0.48' -filter_complex '[0:a]afade=t=in:d=0.015,afade=t=out:st=0.22:d=0.03[a0];[1:a]afade=t=in:d=0.015,afade=t=out:st=0.27:d=0.03[a1];[2:a]afade=t=in:d=0.015,afade=t=out:st=0.38:d=0.10[a2];[a0][a1][a2]concat=n=3:v=0:a=1,loudnorm=I=-29:TP=-6:LRA=7[a]' -map '[a]' -map_metadata -1 -ar 44100 -ac 1 -c:a libmp3lame -b:a 128k -write_xing 0 packages/desktop/src/renderer/public/audio/exam-end.mp3
```

No external source assets are required.
