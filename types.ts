import { Server as NetServer, Socket } from "net";
import { NextApiResponse } from "next";
import { Server as SocketIOServer } from "socket.io";

// export interface SocketServer extends HTTPServer {
//   io?: IOServer | undefined;
// }

// export interface SocketWithIO extends NetSocket {
//   server: SocketServer;
// }

// export interface NextApiResponseWithSocket extends NextApiResponse {
//   socket: SocketWithIO;
// }

// export interface ServerToClientEvents {
//   userServerConnection: () => void;
//   hello: (msg: string) => void;
//   userServerDisconnection: (socketid: string) => void;
// }

// export interface ClientToServerEvents {
//   hello: (msg: string) => void;
//   userServerConnection: () => void;
//   userServerDisconnection: (socketid: string) => void;
// }
export type NextApiResponseServerIo = NextApiResponse & {
  socket: Socket & {
    server: NetServer & {
      io: SocketIOServer;
    };
  };
};