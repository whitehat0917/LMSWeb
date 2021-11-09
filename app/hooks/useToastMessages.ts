import { useSetRecoilState } from 'recoil';
import { toastMessagesList } from 'store/toastMessage';
import ToastMessage, { ToastMessageType } from 'types/elements/ToastMessage';

export default function useToastMessages() {
  const setRecoilState = useSetRecoilState(toastMessagesList);
  const push = (item: ToastMessage) => {
    setRecoilState((prev) =>
      prev.concat([
        {
          id: Date.now(),
          type: ToastMessageType.SUCCESS,
          ...item,
        },
      ])
    );
  };
  return {
    push,
  };
}
