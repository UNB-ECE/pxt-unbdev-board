# Sound level

Read the current RMS sound level from the integrated microphone.

```sig
UNBdevBoardMic.soundLevel()
```

## Parameters

This block has no parameters.

## Returns

A number containing the controller-reported 16-bit RMS reading. This is a relative firmware reading, not a calibrated decibel measurement.

## Usage notes

The first read enables the microphone, restores the remembered threshold, and updates its baseline.

## Example

Microphone behavior remains pending physical validation against the identified board and controller firmware. These examples describe the implemented API.

```blocks
basic.forever(function () {
    led.plotBarGraph(UNBdevBoardMic.soundLevel(), 255)
    basic.pause(100)
})
```

```package
unbdev-board=github:UNB-ECE/pxt-unbdev-board
```
