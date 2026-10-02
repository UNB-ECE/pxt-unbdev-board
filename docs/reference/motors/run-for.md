# Run motor for a duration

Run one motor at a signed speed, wait for the duration, then command it to brake.

```sig
UNBdevMotor.runFor(UNBdevMotor.Motor.Left, 50, 1000)
```

## Parameters

* **motor**: Choose the Left or Right motor channel.
* **speed**: Signed speed from -100 to 100 percent: negative backward, positive forward, zero brake. Rounded and constrained.
* **duration**: Run time in milliseconds. Rounded to a whole millisecond; negative values become zero.

## Usage notes

Waits in the calling fiber. Code after this block runs after the brake command is sent.

## Example

These are API examples, not approval to operate motors. Board revision, controller firmware, wiring, external supply, current limits, braking, and faults must be validated in an approved lab setup. USB power alone is not an approved motor supply.

```blocks
UNBdevMotor.enable(UNBdevMotor.State.Enabled)
UNBdevMotor.runFor(UNBdevMotor.Motor.Left, 50, 1000)
basic.showIcon(IconNames.Yes)
```

```package
unbdev-board=github:UNB-ECE/pxt-unbdev-board
```
