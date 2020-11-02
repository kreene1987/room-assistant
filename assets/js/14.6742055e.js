(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{458:function(t,e,o){"use strict";o.r(e);var a=o(57),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"introduction"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),o("p",[t._v("room-assistant brings your home automation onto the next level: room automation.\nIt is capable of tracking room occupancy and your location around the house with great accuracy, plus any other sensors you may want to attach.\nYou can pick and choose the parts you need from our flexible software to get all the data you need for writing awesome new automations - room-assistant easily integrates them with your favorite home automation suite.")]),t._v(" "),o("p",[t._v("Imagine it: You can turn lights and heating on only in the rooms where people are actually there.\nYou can accurately know if someone is there even when you are just chilling on your couch, situations where a motion sensor would fail and leave you in the dark.\nAnd you can even go a step further and configure your personal thermostat preferences or turn on your favorite TV channels depending on who is in the room!")]),t._v(" "),o("h2",{attrs:{id:"how-it-works"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-it-works"}},[t._v("#")]),t._v(" How it works")]),t._v(" "),o("p",[t._v("Room occupancy detection is based on a variety of methods that can be used independently or in tandem. Bluetooth integrations aim at detecting the devices you carry around with you (phone, smart watch). Thermopile sensor integrations will detect humans by the heat they radiate, and regular motion sensors are also supported.")]),t._v(" "),o("p",[t._v("Place a small Linux board like the Raspberry Pi Zero W into any room you want to track and install room-assistant on it.\nFor example, if you want to track the bedroom, living room and kitchen you would need to setup 3 different devices that are then placed in those rooms.\nIf you don't require the room-level features you can of course also only setup a single instance in your home.")]),t._v(" "),o("h2",{attrs:{id:"why-not"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#why-not"}},[t._v("#")]),t._v(" Why not...?")]),t._v(" "),o("h3",{attrs:{id:"monitor"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#monitor"}},[t._v("#")]),t._v(" monitor")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/andrewjfreyer/monitor",target:"_blank",rel:"noopener noreferrer"}},[t._v("monitor"),o("OutboundLink")],1),t._v(" is a great lightweight project for tracking if a Bluetooth device is nearby, but the room presence tracking is cumbersome to setup and requires the mobile devices to be paired with all machines running the software. room-assistant automatically creates everything for you and determines the current room on its own, without you having to pair the mobile devices to anything. It also integrates with other types of sensors, so that you can manage all of your room-level needs from a single piece of software.")]),t._v(" "),o("h3",{attrs:{id:"happy-bubbles"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#happy-bubbles"}},[t._v("#")]),t._v(" Happy Bubbles")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://www.happybubbles.tech",target:"_blank",rel:"noopener noreferrer"}},[t._v("Happy Bubbles"),o("OutboundLink")],1),t._v(" works with their own BLE beacon presence detector hardware, which unfortunately is not for sale anymore. room-assistant allows you to do the same thing and much more, but with any Linux board.")]),t._v(" "),o("h3",{attrs:{id:"esp32-mqtt-room"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#esp32-mqtt-room"}},[t._v("#")]),t._v(" ESP32-mqtt-room")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://jptrsn.github.io/ESP32-mqtt-room/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ESP32-mqtt-room"),o("OutboundLink")],1),t._v(" integrates with the Home Assistant Core "),o("a",{attrs:{href:"https://www.home-assistant.io/integrations/mqtt_room/",target:"_blank",rel:"noopener noreferrer"}},[t._v("mqtt_room"),o("OutboundLink")],1),t._v(" component to deliver room presence data for BLE devices. This is great as ESP32s are quite cheap, but it also requires you to either carry a BLE beacon around or have an app open on your Android phone at all times. room-assistant supports many more integrations, including "),o("a",{attrs:{href:"/integrations/bluetooth-classic"}},[t._v("Bluetooth Classic")]),t._v(", which allows you to track your phone even without a special app running. That way you can track iOS devices and smart watches as well.")]),t._v(" "),o("h3",{attrs:{id:"find3"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#find3"}},[t._v("#")]),t._v(" FIND3")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://www.internalpositioning.com/doc/",target:"_blank",rel:"noopener noreferrer"}},[t._v("FIND3"),o("OutboundLink")],1),t._v(" lets a device detect its own location based on what it sees in its surroundings. This can be achieved without having to place e.g. Raspberry Pis in every room, but it requires an app to run on the phone/computer in the background at all times. This app is not available for iOS or smart watch devices. room-assistant is capable of tracking any Bluetooth devices, no app required.")]),t._v(" "),o("h3",{attrs:{id:"motion-sensors"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#motion-sensors"}},[t._v("#")]),t._v(" Motion Sensors")]),t._v(" "),o("p",[t._v("You can buy readily assembled motion sensors from many different brands, e.g. Philips Hue.\nMotion is not a good metric for room occupancy though: you may just be sitting at your desk and working on something, without moving much. That will cause the lights to turn off after some timeout, requiring you to wave your hands in the air frantically to turn them on again. room-assistant has integrations that allow you to track occupancy even if the people are stationary.\nAnd if you still want to have a motion detector: you can easily use that with room-assistant as well.")])])}),[],!1,null,null,null);e.default=r.exports}}]);