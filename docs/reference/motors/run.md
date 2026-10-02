# Run motor in a direction

Command one motor to run forward or backward at a chosen speed, or brake it.

```sig
UNBdevMotor.run(UNBdevMotor.Motor.Left, UNBdevMotor.Direction.Forward, 50)
```

## Parameters

* **motor**: Choose the Left or Right motor channel.
* **direction**: Choose Forward, Backward, or Brake.
* **speed**: Speed magnitude from 0 to 100 percent; rounded and constrained. Ignored when direction is Brake.

## Usage notes

Returns immediately after sending the command. The motor continues until another command changes it.

## Example

These are API examples, not approval to operate motors. Board revision, controller firmware, wiring, external supply, current limits, braking, and faults must be validated in an approved lab setup. USB power alone is not an approved motor supply.

```blocks
UNBdevMotor.enable(UNBdevMotor.State.Enabled)
UNBdevMotor.run(UNBdevMotor.Motor.Left, UNBdevMotor.Direction.Forward, 50)
basic.pause(1000)
UNBdevMotor.stop(UNBdevMotor.Motor.Left)
```

```package
unbdev-board=github:UNB-ECE/pxt-unbdev-board
```
