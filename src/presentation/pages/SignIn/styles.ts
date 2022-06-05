import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';

const white = '#fff';
const transparent = 'transparent';

const styles = StyleSheet.create({
    bgImage: {
        alignItems: 'center',
        flex: 1,
        height: Layout.dimensions.SCREEN_HEIGHT,
        justifyContent: 'center',
        left: 0,
        top: 0,
        width: '100%',
    },
    categoryText: {
        backgroundColor: transparent,
        color: white,
        fontFamily: 'light',
        fontSize: 24,
        opacity: 0.54,
        textAlign: 'center',
    },
    container: {
        alignItems: 'center',
        backgroundColor: Colors.dark.background,
        flexGrow: 1,
        height: Layout.dimensions.SCREEN_HEIGHT,
        justifyContent: 'space-around',
        paddingBottom: 20,
        width: '100%',
    },
    formContainer: {
        alignItems: 'center',
        backgroundColor: white,
        borderRadius: 10,
        paddingBottom: 32,
        paddingTop: 32,
        width: Layout.dimensions.SCREEN_WIDTH - 30,
    },
    helpContainer: {
        alignItems: 'center',
        height: 64,
        justifyContent: 'center',
    },
    loginButton: {
        backgroundColor: Colors.dark.primary,
        borderRadius: 10,
        height: 50,
        width: 200,
    },
    loginText: {
        color: white,
        fontSize: 16,
        fontWeight: 'bold',
    },
    loginTextButton: {
        color: white,
        fontSize: 16,
        fontWeight: 'bold',
    },
    rowSelector: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 20,
    },
    selected: {
        backgroundColor: white,
        borderBottomWidth: 70,
        borderColor: white,
        borderRadius: 50,
        borderRightWidth: 70,
        height: 0,
        position: 'absolute',
        top: -5,
        width: 0,
    },
    selectedCategoryText: {
        opacity: 1,
    },
    selectorContainer: {
        alignItems: 'center',
        flex: 1,
    },
    titleContainer: {
        backgroundColor: transparent,
        height: 150,
        justifyContent: 'center',
    },
    titleText: {
        color: white,
        fontSize: 30,
        // fontFamily: 'regular',
        textAlign: 'center',
    },
});

export default styles;
