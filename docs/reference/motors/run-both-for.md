# Run both motors for a duration

Run both motors at a signed speed, wait, then command both to brake.

```sig
UNBdevMotor.runBothFor(50, 1000)
```

## Parameters

* **speed**: Signed speed from -100 to 100 percent: negative backward, positive forward, zero brake. Rounded and constrained.
* **duration**: Run time in milliseconds. Rounded to a whole millisecond; negative values become zero.

## Usage notes

Waits in the calling fiber rather than starting a background timer.

## Example

These are API examples, not approval to operate motors. Board revision, controller firmware, wiring, external supply, current limits, braking, and faults must be validated in an approved lab setup. USB power alone is not an approved motor supply.

```blocks
UNBdevMotor.enable(UNBdevMotor.State.Enabled)
UNBdevMotor.runBothFor(50, 1000)
basic.showIcon(IconNames.Yes)
```

```package
unbdev-board=github:UNB-ECE/pxt-unbdev-board
```
