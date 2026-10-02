# Clear sound threshold flag

Acknowledge the microphone threshold flag by clearing it in the controller.

```sig
UNBdevBoardMic.clearThresholdFlag()
```

## Parameters

This block has no parameters.

## Usage notes

The loud-sound event clears the flag automatically after its handler; direct polling code can clear it explicitly.

## Example

Microphone behavior remains pending physical validation against the identified board and controller firmware. These examples describe the implemented API.

```blocks
if (UNBdevBoardMic.thresholdReached()) {
    basic.showIcon(IconNames.Yes)
    UNBdevBoardMic.clearThresholdFlag()
}
```

```package
unbdev-board=github:UNB-ECE/pxt-unbdev-board
```
