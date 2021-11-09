export enum ToastMessageType {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
  WARNING = 'warning',
}

interface ToastMessage {
  id?: number;
  message: string;
  type?: ToastMessageType;
}

export default ToastMessage;
