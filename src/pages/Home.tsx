import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
} from 'react-native';
import {Button} from '../components/Button';
import {SkillCard} from '../components/SkillCard';

interface SkillData {
  id: string;
  name: string;
  data?: Date;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState('');

  function handleNewAddSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    };
    if (newSkill !== '') {
      setMySkills(oldState => [...new Set([...oldState, data])]);
      setNewSkill('');
    }
  }

  function handleRemoveSkill(id: string) {
    setMySkills(oldState => oldState.filter(skill => skill.id !== id));
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting('Good Morning');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Good afternoon');
    } else {
      setGreeting('Good evening');
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Veronica</Text>
      <Text style={styles.greeting}> {greeting} </Text>

      <TextInput
        value={newSkill}
        style={styles.input}
        placeholder="New skill"
        passwordRules="#777"
        onChangeText={setNewSkill}
        onSubmitEditing={handleNewAddSkill}
        blurOnSubmit={false}
      />

      <Button onPress={handleNewAddSkill} text="Add" />

      <Text style={styles.title}>My skills</Text>
      <FlatList
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <SkillCard
            skill={item.name}
            onPress={() => handleRemoveSkill(item.id)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: Platform.OS === 'ios' ? 20 : 0,
    paddingVertical: Platform.OS === 'ios' ? 70 : 0,
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  greeting: {
    color: '#FFF',
    fontSize: 20,
    marginTop: 10,
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 0,
    marginTop: 20,
    borderRadius: 7,
  },
});
