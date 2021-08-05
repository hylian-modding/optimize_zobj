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
        
        let op = optimize(readFileSync(resolve(__dirname, "dupe_hs.zobj")), [0x1B00, 0x38A8], 0, 6, true);
        
        writeFileSync(resolve("H:\\N64_Modding\\ModLoader64_dev\\my_mods\\optimize_zobj\\test.zobj"), op.zobj);
        console.log(op.oldOffs2NewOffs);
        
    }
    postinit(): void {
    }
    onTick(frame?: number | undefined): void {
    }

}

module.exports = oot_plugin_template;