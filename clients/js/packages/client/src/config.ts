export interface Ports {
  rest?: number;
  rpc?: number;
  grpc?: number;
  exposer?: number;
  faucet?: number;
  prometheus?: number;
  grafana?: number;
}

export interface Resources {
  cpu: string | number;
  memory: string | number;
  limits?: {
    cpu: string | number;
    memory: string | number;
  };
  requests?: {
    cpu: string | number;
    memory: string | number;
  };
}

export interface FaucetConfig {
  enabled: boolean;
  type?: string;
  image?: string;
  concurrency?: number;
  ports?: Ports;
  resources?: Resources;
}

export interface Chain {
  id: string;
  name: string;
  numValidators: number;
  image?: string;
  home?: string;
  binary?: string;
  prefix?: string;
  denom?: string;
  prettyName?: string;
  coins?: string;
  hdPath?: string;
  coinType?: number;
  metrics?: boolean;
  repo?: string;
  assets?: any[]; // Define more specifically if asset structure is known
  upgrade?: {
    enabled: boolean;
    type?: string;
    genesis?: string;
    upgrades?: {
      name: string;
      version: string;
    }[];
  };
  faucet?: FaucetConfig;
  ports?: Ports;
  resources?: Resources;
}

export interface Relayer {
  name: string;
  type: string;
  image?: string;
  replicas?: number;
  chains: string[];
  config?: any; // Define more specifically if structure is known
  channels?: {
    aChain: string;
    bChain: string;
    aPort: string;
    bPort: string;
    aConnection: string;
    newConnection?: boolean;
    channelVersion?: string;
    order?: string;
  }[];
  resources?: Resources;
  ports?: Ports;
}

export interface Explorer {
  enabled: boolean;
  type: string;
  image?: string;
  localhost?: boolean;
  ports?: Ports;
  resources?: Resources;
}

export interface Registry {
  enabled: boolean;
  image: string;
  localhost?: boolean;
  ports?: Ports;
  resources?: Resources;
}

export interface Monitoring {
  enabled: boolean;
  ports?: {
    prometheus?: number;
    grafana?: number;
  };
  resources?: Resources;
}

export interface Ingress {
  enabled: boolean;
  type: string;
  host?: string;
  certManager?: {
    issuer?: string;
  };
  resources?: Resources;
}

export interface Images {
  imagePullPolicy: string;
}

export interface StarshipConfig {
  chains: Chain[];
  relayers?: Relayer[];
  explorer?: Explorer;
  registry?: Registry;
  monitoring?: Monitoring;
  ingress?: Ingress;
  images?: Images;
}
