import { ObjectId } from 'mongodb';
export declare enum ServerCapability {
    STORAGE = "storage",
    API = "api"
}
export declare class ServerCapabilityStatus {
    /**
     * API (or any other server except Stargate) server may periodically calls this endpoint to update the status for capability.
     * This allow us to only direct users to online servers.
     *
     */
    statusCheckEndpoint: string;
    status?: boolean;
    lastUpdatedDate?: Date;
    /**
     * If multiple servers matches a certain criteria and resolving doesn't use other criteria
     * (including random selection) for selecting a server, this property will be used to break the ties.
     */
    preferred: boolean;
    disabled?: boolean;
}
/**
 * Each property on this class has a 1:1 mapping to value of ServerCapability enum
 */
export declare class ServerStatus {
    /**
     * Storage application (Stargate) insert this to Server document upon start of the service.
     * Stargate will resolve its identity (Server) by finding the record by its IP.
     * Stargate will have a periodic task to that handles the ServerCapabilityStatus update.
     */
    storage?: ServerCapabilityStatus;
    api?: ServerCapabilityStatus;
}
export declare class SystemInfo {
    freeSpace: number;
    totalSpace: number;
}
export declare class Server {
    ipAddress: string;
    domain: string;
    ncfDomain: string;
    aliases: string[];
    systemInfo: SystemInfo;
    capabilities: ServerCapability[];
    status: ServerStatus;
    enabled: boolean;
}
export declare class ServerDBObject extends Server {
    _id: ObjectId;
}
