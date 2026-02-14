export interface ModBootJson {
    name: string;
    version: string;
    styleFileList: string[];
    scriptFileList: string[];
    scriptFileList_preload?: string[];
    scriptFileList_earlyload?: string[];
    scriptFileList_inject_early?: string[];
    tweeFileList: string[];
    imgFileList: string[];
    replacePatchList?: string[];
    additionFile: string[];
    additionBinaryFile: string[];
    additionDir: string[];
    addonPlugin?: ModBootJsonAddonPlugin[];
    dependenceInfo?: DependenceInfo[];
}
export interface ModBootJsonAddonPlugin {
    modName: string;
    addonName: string;
    modVersion: string;
    params?: any[] | {
        [key: string]: any;
    };
}
export declare function checkModBootJsonAddonPlugin(v: any): v is ModBootJsonAddonPlugin;
export interface DependenceInfo {
    modName: string;
    version: string;
}
export declare function checkDependenceInfo(v: any): v is DependenceInfo;
export declare function validateBootJson(bootJ: any): bootJ is ModBootJson;
//# sourceMappingURL=packModPack.d.ts.map