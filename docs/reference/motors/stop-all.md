# Stop all motors

Command both integrated motor channels to brake.

```sig
UNBdevMotor.stopAll()
```

## Parameters

This block has no parameters.

## Usage notes

Sends a brake command to each channel. It does not disable the driver or establish a hardware emergency-stop guarantee.

## Example

These are API examples, not approval to operate motors. Board revision, controller firmware, wiring, external supply, current limits, braking, and faults must be validated in an approved lab setup. USB power alone is not an approved motor supply.

```blocks
input.onButtonPressed(Button.A, function () {
    UNBdevMotor.stopAll()
})
```

```package
unbdev-board=github:UNB-ECE/pxt-unbdev-board
```
