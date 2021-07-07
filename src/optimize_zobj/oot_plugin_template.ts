import { IPlugin, IModLoaderAPI } from 'modloader64_api/IModLoaderAPI';
import { IOOTCore } from 'modloader64_api/OOT/OOTAPI';
import { InjectCore } from 'modloader64_api/CoreInjection';
import { optimize } from './zzoptimize';
import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

class oot_plugin_template implements IPlugin {

    ModLoader!: IModLoaderAPI;
    pluginName?: string | undefined;
    @InjectCore()
    core!: IOOTCore;

    preinit(): void {
    }
    init(): void {
        /*
        let op = optimize(readFileSync(resolve(__dirname, "FD3DS.zobj")), [0x50D0, 0x5120]);
        
        writeFileSync("./test.zobj", op.zobj);
        console.log(op.oldOffs2NewOffs);
        */
    }
    postinit(): void {
    }
    onTick(frame?: number | undefined): void {
    }

}

module.exports = oot_plugin_template;