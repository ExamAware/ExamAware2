# Reminder sound assets

The canonical MP3 reminder cues are deterministic transcodes of the
repository-bundled, user-provided WAV masters in `alerts/pond/`:

- `alerts/pond/Begin2.wav` -> `exam-start.mp3`
- `alerts/pond/Pre-end2.wav` -> `exam-alert.mp3`
- `alerts/pond/End2.wav` -> `exam-end.mp3`

The WAV masters remain unchanged. The MP3s retain their full three-second tails
and stereo channels, and are normalized near `-23 LUFS` with a `-6 dBTP`
ceiling. The masters and derived MP3 files use the same license as the repository.

## Reproduction

Run these commands from the repository root with FFmpeg. Pass one measures each
master and prints JSON; its values are fixed in the corresponding deterministic
linear pass-two command.

```sh
ffmpeg -hide_banner -nostats -i packages/desktop/src/renderer/public/audio/alerts/pond/Begin2.wav -af loudnorm=I=-23:TP=-6:LRA=7:print_format=json -f null -
ffmpeg -hide_banner -nostats -i packages/desktop/src/renderer/public/audio/alerts/pond/Pre-end2.wav -af loudnorm=I=-23:TP=-6:LRA=7:print_format=json -f null -
ffmpeg -hide_banner -nostats -i packages/desktop/src/renderer/public/audio/alerts/pond/End2.wav -af loudnorm=I=-23:TP=-6:LRA=7:print_format=json -f null -

ffmpeg -hide_banner -loglevel error -y -i packages/desktop/src/renderer/public/audio/alerts/pond/Begin2.wav -af 'loudnorm=I=-23:TP=-6:LRA=7:measured_I=-16.80:measured_TP=-1.55:measured_LRA=0.20:measured_thresh=-28.04:offset=-3.62:linear=true' -map_metadata -1 -ar 48000 -ac 2 -c:a libmp3lame -b:a 192k -write_xing 0 packages/desktop/src/renderer/public/audio/exam-start.mp3

ffmpeg -hide_banner -loglevel error -y -i packages/desktop/src/renderer/public/audio/alerts/pond/Pre-end2.wav -af 'loudnorm=I=-23:TP=-6:LRA=7:measured_I=-18.32:measured_TP=-2.61:measured_LRA=0.20:measured_thresh=-30.64:offset=-3.67:linear=true' -map_metadata -1 -ar 48000 -ac 2 -c:a libmp3lame -b:a 192k -write_xing 0 packages/desktop/src/renderer/public/audio/exam-alert.mp3

ffmpeg -hide_banner -loglevel error -y -i packages/desktop/src/renderer/public/audio/alerts/pond/End2.wav -af 'loudnorm=I=-23:TP=-6:LRA=7:measured_I=-16.64:measured_TP=-1.32:measured_LRA=1.50:measured_thresh=-28.07:offset=-3.73:linear=true' -map_metadata -1 -ar 48000 -ac 2 -c:a libmp3lame -b:a 192k -write_xing 0 packages/desktop/src/renderer/public/audio/exam-end.mp3
```
