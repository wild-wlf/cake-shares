/* eslint-disable no-console */
const getToken = () => {
  const admin_plastk_token = document?.cookie?.split?.(`${process.env.REACT_APP_ADMIN_PLASTK_TOKEN_COOKIE}=`)?.[1];
  return admin_plastk_token?.split?.(';')?.[0];
};

class WebSocketConnection {
  send(message) {
    this.socket.send(JSON.stringify(message));
  }

  on(event, callback) {
    this.socket.addEventListener(event, callback);
  }

  isOpen() {
    return this?.socket?.readyState === 1;
  }

  close() {
    if (this.socket) {
      this.socket.close();
      this.socket.removeEventListener('message', () => {});
      this.socket.removeEventListener('close', () => {});
      this.socket.removeEventListener('open', () => {});
      this.socket.removeEventListener('error', () => {});
    }
  }

  reOpen() {
    if (this.socket) {
      this.socket.removeEventListener('message', () => {});
      this.socket.removeEventListener('close', () => {});
      this.socket.removeEventListener('open', () => {});
      this.socket.removeEventListener('error', () => {});
      this.socket.close(1000, 'reopening');
    }
    if (process) this.socket = new WebSocket(process?.env?.REACT_APP_WEBSOCKET_URL?.concat(`?admin=${getToken()}`));
    return this.socket;
  }
}

export const webSocketConnection = new WebSocketConnection();
// to show the sockets health
export default {
  async health() {
    // eslint-disable-next-line no-return-await
    return await new Promise((resolve, reject) => {
      webSocketConnection.on('open', () => {
        resolve();
      });
      webSocketConnection.on('error', () => {
        reject();
      });
    });
  },
};
