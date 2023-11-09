import { TextInput, View, Text } from "react-native";
import { styles } from "../../Styles";

export default function StyledInput(props) {
    return (
        <View>
            <TextInput 
                // style={[styles.textInput, props.width ? {width: props.width} : {}]} 
                // placeholder={props.name} 
                // value={props.value} 
                // onChangeText={props.set}
                // keyboardType={props.type? props.type : "default"}
                // secureTextEntry={props.isSecure?true: false}
                // multiline = {props.isTextArea ? true : false}
                // numberOfLines = {props.isTextArea ? 4 : 0}
            ></TextInput>
        </View>
    )
}
