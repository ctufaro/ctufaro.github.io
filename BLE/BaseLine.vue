<template>
    <v-app class="pa-5">
        <div>
            <h1>{{title}}</h1>
        </div>
        <v-flex lg6>
            <v-layout wrap>
                <v-flex lg3 pr-7><v-text-field v-model="serviceUuid" label="Service UUID"></v-text-field></v-flex>
                <v-flex lg3><v-text-field v-model="characteristicUuid" label="Characteristic UUID"></v-text-field></v-flex>
            </v-layout>
            <v-text-field v-model="message" label="Message"></v-text-field>
            <v-btn color="primary mb-10" small @click.prevent="getDevices">CONNECT/SEND</v-btn>
            <v-alert type="info">Log: {{logmsg}}</v-alert>
            <v-alert type="error">Error: {{error}}</v-alert>
        </v-flex>
    </v-app>
</template>

<script>
export default {
    data: () => ({
        title: 'BLE Configuration',
        message: 'hello world',
        logmsg: '',
        error: '',
        serviceUuid: '0x00FF',
        characteristicUuid: '0xFF01'
    }),
    mounted: function () {
        if (!navigator.bluetooth) {
            this.setError('Web Bluetooth API is not available.\n');
        }
    },
    methods: {
        getDevices() {
            this.clearLog();
            if (navigator.bluetooth) {
                var bluetoothDevice;
                //let filters = [];
                // let serviceUuid = document.querySelector('#service').value;
                if (this.serviceUuid.startsWith('0x')) {
                    this.serviceUuid = parseInt(this.serviceUuid);
                }
                // this.log('Service UUID: ' + this.serviceUuid);
                // let characteristicUuid = document.querySelector('#characteristic').value;
                if (this.characteristicUuid.startsWith('0x')) {
                    this.characteristicUuid = parseInt(this.characteristicUuid);
                }
                // this.log('Characteristic UUID: ' + characteristicUuid);
                this.log('Requesting Bluetooth Device...');
                navigator.bluetooth.requestDevice({
                        filters: [{
                            services: [
                                this.serviceUuid
                            ]
                        }]
                    })
                    .then(device => {
                        bluetoothDevice = device;
                        this.log('-> Name:      ' + device.name);
                        // this.log('-> ID:        ' + device.id);
                        bluetoothDevice.addEventListener('gattserverdisconnected', this.onDisconnected);
                        return device.gatt.connect()
                    })
                    .then(server => {
                        // this.log('Getting Service');
                        return server.getPrimaryService(this.serviceUuid);
                    })
                    .then(service => {
                        // this.log('Getting characteristic');
                        if (this.characteristicUuid) {
                            return service.getCharacteristic(this.characteristicUuid);
                        }
                    })
                    .then(characteristic => {
                        let encoder = new TextEncoder('utf-8');
                        this.log("Encoded Message: " + encoder.encode(this.message));
                        return characteristic.writeValue(encoder.encode(this.message));
                    })
                    .then(() => {
                        this.log("Message successfully sent !");
                    })
                    // .then(characteristics => {
                    //   console.log(characteristics);
                    //   this.log('> Characteristics: ' + characteristics.map(c => c.uuid).join('\n' + ' '.repeat(19)));
                    // })
                    .catch(error => {
                        this.log('Error: ' + error);
                    });
            } else {
                this.setError('No Bluetooth detected');
            }
        },
        onDisconnected: function (e) {
            let device = event.target;
            this.log(`Device: ${device.name} is disconnected (Error: ${e})`);
        },
        log: function () {
            var line = Array.prototype.slice.call(arguments).map(function (argument) {
                return typeof argument === 'string' ? argument : JSON.stringify(argument);
            }).join(' ');
            this.logmsg += line + '\n';
        },
        clearLog: function () {
            this.logmsg = '';
        },
        setError: function (err) {
            this.error = err;
        }
    }
}
</script>