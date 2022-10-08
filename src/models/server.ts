import { ObjectId } from 'bson';

export enum ServerCapability {
    STORAGE = 'storage',
    API = 'api'
}

export class ServerCapabilityStatus {
    /**
     * API or Stargate server may periodically calls this endpoint to update the status for capability.
     * This allow us to only direct users to online servers.
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
export class ServerStatus {
    /**
     * Storage application (Stargate) insert this to Server document upon start of the service.
     * Stargate will resolve its identity (Server) by finding the record by its IP.
     * Stargate will have a periodic task to that handles the ServerCapabilityStatus update.
     */
    storage?: ServerCapabilityStatus;
    api?: ServerCapabilityStatus;
}

export class Server {
    ipAddress: string;
    domain: string;
    aliases: string[];
    capabilities: ServerCapability[];
    status: ServerStatus
    enabled: boolean;
}

export class ServerDBObject extends Server {
    _id: ObjectId;
}