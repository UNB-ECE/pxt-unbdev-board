# Sound threshold reached

Check whether the firmware microphone threshold flag is set.

```sig
UNBdevBoardMic.thresholdReached()
```

## Parameters

This block has no parameters.

## Returns

A boolean: true when the controller flag equals 1; false otherwise.

## Usage notes

Reading the flag does not clear it. Use clear sound threshold flag to acknowledge it.

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
