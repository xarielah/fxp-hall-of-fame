import { Container, Flex, Text, Progress } from '@chakra-ui/react';
import { useState } from 'react';
import { PickUsers, ShowCode } from './components/stages';
import forum from './data/forum';

function App() {
    const [weeklyUser, setWeeklyUser] = useState([]);
    const [weeklyThread, setWeeklyThread] = useState([]);
    const [stage, setStage] = useState(0);

    const inc = () => stage < 2 && setStage((prev) => prev + 1);
    const dec = () => setStage((stage) => stage - 1);

    const setUser = (str) => setWeeklyUser(str);
    const setThread = (str) => setWeeklyThread(str);

    return (
        <Container>
            <Text textAlign={'center'}>
                {stage !== 1 ? `שלב ${stage + 1}/2` : 'בהצלחה ותודה רבה ♥'}
            </Text>
            <Progress
                boxShadow={'0 0 5px #33333355'}
                borderRadius={'full'}
                value={(stage + 1) * 50}
                size='xs'
                colorScheme='messenger'
            />
            <Flex flexDirection='column' gap={10} my={5}>
                {stage === 0 && (
                    <PickUsers
                        forum={forum}
                        inc={inc}
                        dec={dec}
                        setUser={setUser}
                        setThread={setThread}
                    />
                )}
                {stage === 1 && (
                    <ShowCode
                        dec={dec}
                        forum={forum}
                        weeklyThread={weeklyThread}
                        weeklyUser={weeklyUser}
                    />
                )}
            </Flex>
        </Container>
    );
}

export default App;
