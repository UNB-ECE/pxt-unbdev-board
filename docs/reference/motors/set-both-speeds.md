# Set both motor speeds

Set both motor channels to the same signed speed.

```sig
UNBdevMotor.setBothSpeeds(50)
```

## Parameters

* **speed**: Signed speed from -100 to 100 percent: negative backward, positive forward, zero brake. Rounded and constrained.

## Usage notes

Sends one command per motor and returns without waiting; the motors continue until changed or stopped.

## Example

These are API examples, not approval to operate motors. Board revision, controller firmware, wiring, external supply, current limits, braking, and faults must be validated in an approved lab setup. USB power alone is not an approved motor supply.

```blocks
UNBdevMotor.enable(UNBdevMotor.State.Enabled)
UNBdevMotor.setBothSpeeds(50)
basic.pause(1000)
UNBdevMotor.stopAll()
```

```package
unbdev-board=github:UNB-ECE/pxt-unbdev-board
```
