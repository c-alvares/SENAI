import { ScrollView, View, Text, TouchableOpacity} from 'react-native';

export default function Compromissos({ navigation }) {
    const data = [
        {
            "id":1,
            "tipo":2,
            "nome":"Escola",
            "horario":"07:30 - 11:30"
        },
        {
            "id":2,
            "tipo":1,
            "nome":"Consulta Médica",
            "horario":"13:00 - 13:40"
        },
        {
            "id":3,
            "tipo":3,
            "nome":"Ir ao mercado",
            "horario":"16:30 - 17:00"
        },
        {
            "id":4,
            "tipo":4,
            "nome":"Ir ao cinema",
            "horario":"20:00 - 22:30"
        },
    ]



    return (
        <ScrollView styles={styles.container}>
            {
                data.map((item, index) => {
                    return(
                        
                    )
                })
            }

        </ScrollView>
    )
}