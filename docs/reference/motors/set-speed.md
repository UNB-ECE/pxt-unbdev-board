# Set motor speed

Set one motor using a signed speed value.

```sig
UNBdevMotor.setSpeed(UNBdevMotor.Motor.Left, 50)
```

## Parameters

* **motor**: Choose the Left or Right motor channel.
* **speed**: Signed speed from -100 to 100 percent: negative backward, positive forward, zero brake. Rounded and constrained.

## Usage notes

The command does not wait for a run duration or stop automatically.

## Example

These are API examples, not approval to operate motors. Board revision, controller firmware, wiring, external supply, current limits, braking, and faults must be validated in an approved lab setup. USB power alone is not an approved motor supply.

```blocks
UNBdevMotor.enable(UNBdevMotor.State.Enabled)
UNBdevMotor.setSpeed(UNBdevMotor.Motor.Left, -40)
basic.pause(1000)
UNBdevMotor.stop(UNBdevMotor.Motor.Left)
```

```package
unbdev-board=github:UNB-ECE/pxt-unbdev-board
```
