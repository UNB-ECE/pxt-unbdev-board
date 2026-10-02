# Stop motor

Command one motor channel to brake.

```sig
UNBdevMotor.stop(UNBdevMotor.Motor.Left)
```

## Parameters

* **motor**: Choose the Left or Right motor channel.

## Usage notes

Sends the brake command; it does not disable the entire driver or confirm physical stopping.

## Example

These are API examples, not approval to operate motors. Board revision, controller firmware, wiring, external supply, current limits, braking, and faults must be validated in an approved lab setup. USB power alone is not an approved motor supply.

```blocks
input.onButtonPressed(Button.A, function () {
    UNBdevMotor.stop(UNBdevMotor.Motor.Left)
})
```

```package
unbdev-board=github:UNB-ECE/pxt-unbdev-board
```
