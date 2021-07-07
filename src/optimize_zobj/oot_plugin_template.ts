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
        let s = new Set<number>();
        
        s.add(0x52A8);

        let op = optimize(readFileSync(resolve(__dirname, "object_link_child.zobj")), s);
        
        writeFileSync("./test.zobj", op.zobj);
        console.log(op.newOffsets);
        */
    }
    postinit(): void {
    }
    onTick(frame?: number | undefined): void {
    }

}

module.exports = oot_plugin_template;