# Set sound threshold

Choose the sound threshold used by the firmware loud-sound flag and event.

```sig
UNBdevBoardMic.setThreshold(75)
```

## Parameters

* **threshold**: A relative sound-level number from 1 to 65535; default 50. It is rounded and constrained to this range.

## Example

Microphone behavior remains pending physical validation against the identified board and controller firmware. These examples describe the implemented API.

```blocks
UNBdevBoardMic.setThreshold(75)
UNBdevBoardMic.onLoudSound(function () {
    basic.showIcon(IconNames.Yes)
})
```

```package
unbdev-board=github:UNB-ECE/pxt-unbdev-board
```
