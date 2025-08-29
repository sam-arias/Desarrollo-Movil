import React, {Component } from 'react'; 
import {View,Text,Image,ScrollView,TextInput,Button,StyleSheet,Alert} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre:'',
      apellido:'',
      email:'',
      telefono:'',
      descripcion:'',
      mostrarPerfil: false,
      mensajeAprobacion: 'Perfil creado con éxito'
    };
  }

  // Método para cambiar el nombre
  changeNameState = (texto) => {
    this.setState({
      nombre: texto, 
      mostrarPerfil: false,
      mensajeAprobacion: 'Informacion Actualizada'
    });
  };

  // Método para cambiar el apellido
  changeLastNameState = (texto) => {
    this.setState({
      apellido: texto, 
      mostrarPerfil: false,
      mensajeAprobacion: 'Informacion Actualizada'
    });
  };

  // Método para cambiar el email
  changeEmailState = (texto) => {
    this.setState({
      email: texto, 
      mostrarPerfil: false,
      mensajeAprobacion: 'Informacion Actualizada'
    });
  };

  // Método para cambiar el telefono
  changeTelefonoState = (texto) => {
    this.setState({
      telefono: texto, 
      mostrarPerfil: false,
      mensajeAprobacion: 'Informacion Actualizada'
    });
  };

  // Método para cambiar el descripción
  changeDescriptionState = (texto) => {
    this.setState({
      descripcion: texto, 
      mostrarPerfil: false,
      mensajeAprobacion: 'Informacion Actualizada'
    });
  };

  saveProfile = () => {
    const {nombre, apellido, email, telefono, descripcion} = this.state;
    // Validar que los campos obligatorios no esten vacios
    // nombre, apellido y email
    if (!nombre.trim() || !apellido.trim() || !email.trim()) {
      Alert.alert('Campos Vacios',
        'Los campos nombre, apellido y email no pueden estar vacios',
        [{text: 'OK'}]
      );
      return;
    };

    // Validar el correo
    if (!email.includes('@')) {
      Alert.alert(
        'Email invalido',
        'Por favor ingresar un correo valido',
        [{text: 'OK'}]
      )
      return;
    };

    this.setState({
      mostrarPerfil: true
    });
    
    Alert.alert(
      'Perfil guardado',
      'El perfil ha sido guardado con éxito',
      [{text: 'OK'}]
    )

  };

  // Método para limpiar el formulario
  clearForm = () => {
    this.setState({
      nombre: '',
      apellido: '',
      email: '',
      telefono: '',
      descripcion: '',
      mostrarPerfil: false,
      mensajeAprobacion: ''
    });

    Alert.alert(
      'Formulario Limpiado', // Titulo de la alerta
      'Todos los campos han sido borrados',
      [{text: 'OK'}]
    );

  };

  render() {
    const {
      nombre, 
      apellido, 
      email, 
      telefono, 
      descripcion, 
      mostrarPerfil
    } = this.state;

    return(
      <>
      <ScrollView style={styles.container}>
        <View style={styles.profileContainer}>
          <Image
            source={{uri: 'https://cdn-icons-png.flaticon.com/512/6073/6073874.png'}}
            style={styles.imagen} // Se crea el estilo
            resizeMode='cover'
          />
          <Text style={styles.text}>Mi perfil de usuario</Text>
          <Text>Mi aplicación demo de react</Text>
        </View>

        <View style={styles.formInfo}>
          <Text style={styles.header}>Nombre</Text>
          <TextInput style={styles.textInfo}
            value={nombre}
            onChangeText={this.changeNameState}
            placeholder='Ingrese su nombre'
            placeholderTextColor='#999'
          />

          <Text style={styles.header}>Apellido</Text>
          <TextInput style={styles.textInfo}
            value={apellido}
            onChangeText={this.changeLastNameState}
            placeholder='Ingrese su apellido'
            placeholderTextColor='#999'
          />

          <Text style={styles.header}>Email</Text>
          <TextInput style={styles.textInfo}
            value={email}
            onChangeText={this.changeEmailState}
            placeholder='Ingrese su email'
            placeholderTextColor='#999'
          />
          
          <Text style={styles.header}>Télefono</Text>
          <TextInput style={styles.textInfo}
            value={telefono}
            onChangeText={this.changeTelefonoState}
            placeholder='Ingrese su teléfono'
            placeholderTextColor='#999'
          />

          <Text style={styles.header}>Descripción</Text>
          <TextInput style={styles.textInfo}
            value={descripcion}
            onChangeText={this.changeDescriptionState}
            placeholder='Ingrese su descripción'
            placeholderTextColor='#999'
          />

        </View>

        <View style={styles.button}>

          <View>
            <Button
            title='Guardar Perfil'
            onPress={this.saveProfile} // Crear método para guardar
            />
          </View>
          
          <View>
            <Button
            title='Limpiar Formulario'
            onPress={this.clearForm}
           />
          </View>
          
        </View>

      </ScrollView>
      </>
    )
  }


}; // Cierre de la clase

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },

  header: {
    alignItems: 'center',
    padding: 15,
    fontWeight: '600'
  },

  imagen: {
    width: 80,
    height: 80,
    borderRadius:30,
    marginBottom: 15,
    borderWidth: 4,
    borderColor: 'white',
    marginTop: 15
  },

  button: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 15
  },

  profileContainer: {
    alignItems: 'center'
  },

  text: {
    color: '#1b80fbff',
    fontSize: 20
  },

  textInfo: {
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    marginLeft: 10
  },

  formInfo: {
    padding: 10,
    margin:10,
    backgroundColor: '#eee',
    marginTop: 20,
    borderRadius: 20,
    paddingBottom: 30
  }

})

export default App;
