import React from 'react';
import {View, 
    Text, 
    StyleSheet, 
    SafeAreaView, 
    StatusBar, 
    Pressable,
    Linking,
    Button,
    Image} from 'react-native';

const COLOR_GITHUB = '#010409';
const URL_GITHUB = 'https://github.com/beatrizgomess';
const COLOR_FONT_GITHUB = '#C9D1D9';
const COLOR_DARK_GITHUB = '#4F56SE';
const IMAGE_PROFILE = 'https://avatars.githubusercontent.com/u/78573126?v=4';

const App = () =>{
    const handlePressGoToGitHub = async () =>{
        console.log('verificando link')
        const resp = await Linking.canOpenURL(URL_GITHUB);
        if(resp){
            console.log('aprovado link')
            console.log('abrindo link')
            await Linking.openURL(URL_GITHUB);
        }
        console.log('link negado')

    }

    const box = () =>{
        const box1 = document.getElementById('box-green');
        let qntBox = [];
        for(let i = 0; i < 14; i++){
            qntBox.push(box1);
        }
    }
    return (
    <SafeAreaView style={style.container}>
    <StatusBar backgroundColor={COLOR_GITHUB} barStyle={'light-content'}></StatusBar>
    <View style={style.content}>
      <Image accessibilityLabel='Beatriz Gomes' style={style.avatar} 
      source={{uri: IMAGE_PROFILE}}/>
      <Text accessibilityLabel='Nome Beatriz Gomes' style={[style.defaultText, style.name]}>Beatriz Gomes</Text>
      <Text accessibilityLabel='username @beatrizgomess' style={[style.defaultText, style.nickname]}>@beatrizgomess</Text>
      <Text accessibilityLabel='Descrição: Não há fatos, há interpretações de códigos.  ' style={[style.defaultText, style.description]}>
      Não há fatos, há interpretações de códigos. </Text>
      <Pressable onPress={handlePressGoToGitHub}>
      <View style={style.button}>
         <Text style={[style.defaultText, style.textButton]}>Open in GitHub</Text>
      </View>
      </Pressable>
    </View>
</SafeAreaView>
    );
};


export default App;

const style = StyleSheet.create({
container: {
    backgroundColor: COLOR_GITHUB,
    flex: 1, // expandir para a tela inteira
    justifyContent: 'center',

},

content:{
    alignItems: 'center',
    padding: 20,
},

defaultText:{
    color: COLOR_FONT_GITHUB,
    
},

box:{
    margin: 20,
    height: 10,
    width: 10,
    flexDirection: 'row',
    backgroundColor: 'green',
},

name:{
    fontSize: 24,
    fontWeight: 'bold',
},

nickname:{
fontSize: 18,
color: 'white',
},

description:{
    fontSize: 16,
    fontWeight: 'bold',
},

avatar:{
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
    
},

button:{
    backgroundColor: COLOR_FONT_GITHUB,
    borderRadius: 20,
    marginTop: 20,
    padding: 20,
},
textButton:{
    fontSize: 16,
    fontWeight: 'bold',
    color: COLOR_GITHUB,
}


});