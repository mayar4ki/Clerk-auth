import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { View } from 'react-native';
import { Dialog, Portal, useTheme } from 'react-native-paper';
import { useAlertDialog } from '~/store/useAlertDialog';
import { Typography } from '../styled/Typography';

export const AlertDialogProvider = () => {
    const [body, set] = useAlertDialog(state => [state.body, state.set]);

    const hideDialog = () => set(null);
    const { colors } = useTheme()

    return (
        <Portal>
            <Dialog visible={!!body} onDismiss={hideDialog}>
                <Dialog.Content>
                    <View className='  flex flex-row justify-start items-center pb-1 
                    border-b border-b-slate-300 mb-2
                    '>
                        <MaterialIcons name='error-outline' size={25}
                            color={colors.secondary}
                            style={{ marginRight: 10 }}
                        />
                        <Typography variant="bodyLarge" color='secondary'  >
                            Alert
                        </Typography>
                    </View>

                    <Typography variant="bodyMedium" color='secondary' >
                        {body}
                    </Typography>
                </Dialog.Content>
            </Dialog>
        </Portal>
    );
};

