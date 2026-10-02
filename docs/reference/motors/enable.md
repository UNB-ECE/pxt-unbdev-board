# Enable motor driver

Enable or disable the integrated motor driver.

```sig
UNBdevMotor.enable(UNBdevMotor.State.Enabled)
```

## Parameters

* **state**: Choose Enabled or Disabled.

## Usage notes

Disabling the driver is separate from commanding each motor to brake. Follow the approved lab shutdown procedure.

## Example

These are API examples, not approval to operate motors. Board revision, controller firmware, wiring, external supply, current limits, braking, and faults must be validated in an approved lab setup. USB power alone is not an approved motor supply.

```blocks
UNBdevMotor.enable(UNBdevMotor.State.Enabled)
UNBdevMotor.stopAll()
```

```package
unbdev-board=github:UNB-ECE/pxt-unbdev-board
```
