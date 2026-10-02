# Analog read Click pin

Read a controller ADC value from an eligible Click socket signal.

```sig
UNBdevClick.analogReadPin(UNBdevClick.AnalogSignal.AN, UNBdevClick.Socket.A)
```

## Parameters

* **pin**: Choose AN, RST, or PWM from the analog-signal dropdown.
* **socket**: Choose Click socket A or B on the integrated UNBdev.board.

## Returns

A number containing the raw controller ADC reading. The hardware range and voltage conversion are not yet established by the hardware contract.

## Usage notes

Do not assume a micro:bit ADC range or convert this raw number to volts without approved calibration and electrical limits.

## Example

Click A/B topology, routing, voltage/current limits, and controller behavior remain provisional and physically unverified. Use only an approved module and wiring setup; do not connect hardware based on this example alone.

```blocks
let reading = UNBdevClick.analogReadPin(UNBdevClick.AnalogSignal.AN, UNBdevClick.Socket.A)
basic.showNumber(reading)
```

```package
unbdev-board=github:UNB-ECE/pxt-unbdev-board
```
