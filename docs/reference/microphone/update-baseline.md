# Update microphone baseline

Recalculate the ambient-sound baseline used by the integrated microphone.

```sig
UNBdevBoardMic.updateBaseline()
```

## Parameters

This block has no parameters.

## Usage notes

Use this after moving the board to a place with a different steady background sound. It does not set the loud-sound threshold.

## Example

Microphone behavior remains pending physical validation against the identified board and controller firmware. These examples describe the implemented API.

```blocks
UNBdevBoardMic.setEnabled(UNBdevBoardMic.State.Enabled)
basic.pause(1000)
UNBdevBoardMic.updateBaseline()
```

```package
unbdev-board=github:UNB-ECE/pxt-unbdev-board
```
