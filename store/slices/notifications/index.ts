// eslint-disable-next-line import/no-unresolved
import { FetchNotificationsQuery } from '@lib/types/generated';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// eslint-disable-next-line import/no-unresolved
import Toast from '@lib/utils/toast';

const notificationsDataSlice = createSlice({
    name: 'notificationData',
    initialState: [] as unknown as FetchNotificationsQuery['notifications'],
    reducers: {
        setNotificationData: (state: any, action: PayloadAction<FetchNotificationsQuery>) => {
            // eslint-disable-next-line no-param-reassign
            state = action.payload;
            return state;
        },
    },
});

export const fetchAndSetNotificationsData = () => async (dispatch: any) => {
    try {
        const response = await fetch('/api/notifications');
        if (response.ok) {
            const data: FetchNotificationsQuery = await response.json();
            const { setNotificationData } = notificationsDataSlice.actions;
            dispatch(setNotificationData(data));
        } else {
            Toast('something went wrong, check your network connection', { type: 'error' });
        }
    } catch (error) {
        Toast(error as unknown as string, { type: 'error' });
    }
};
export const MarkNotificationReadData = (ID: number) => async (dispatch: any) => {
    try {
        const response = await fetch('/api/notification', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: ID,
            }),
        });
        if (response.ok) {
            // const data: NotificationQueryQuery = await response.json();
            // console.log(data);
            dispatch(fetchAndSetNotificationsData());
        } else {
            Toast('something went wrong, with notificationRead', { type: 'error' });
        }
    } catch (error) {
        Toast(error as unknown as string, { type: 'error' });
    }
};

export const notificationDataAction = notificationsDataSlice.actions;
export default notificationsDataSlice.reducer;
