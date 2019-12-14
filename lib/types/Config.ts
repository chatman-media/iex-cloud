export interface IEXCloudConfig {
    version?: Version;
    sandbox?: boolean;
}

export type Version = 'beta' | 'v1' | 'stable' | 'latest' | string;
