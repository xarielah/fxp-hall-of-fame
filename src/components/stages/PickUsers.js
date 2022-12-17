import { Switch, Input, Text, Wrap, Flex, Button, Box } from '@chakra-ui/react';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
const PickUsers = ({ setUser, setThread, inc }) => {
    const [wasThereAUser, setWasThereAUser] = useState(false);
    const [wasThereAThread, setWasThereAThread] = useState(false);
    const {
        control,
        handleSubmit,
        resetField,
        formState: { errors },
    } = useForm({
        defaultValues: {
            user: '',
            userLink: '',
            thread: '',
            threadLink: '',
            threadUser: '',
            threadUserName: '',
        },
    });

    const onsubmit = (data) => {
        const {
            user,
            userLink,
            thread,
            threadLink,
            threadUser,
            threadUserName,
        } = data;

        if (wasThereAUser) {
            setUser([user, userLink]);
        }
        if (wasThereAThread) {
            setThread([thread, threadLink, threadUser, threadUserName]);
        }
        inc();
    };
    const threadRegex =
        /^https:\/\/www\.fxp\.co\.il(\/(showthread\.php)?(\?.*)?)?$/;
    const userRegex = /^https:\/\/www\.fxp\.co\.il(\/(member\.php)?(\?.*)?)?$/;

    return (
        <>
            <form onSubmit={handleSubmit(onsubmit)}>
                <Flex
                    justify={'center'}
                    flexDirection={{ base: 'column', md: 'row' }}
                    mb={5}
                    minW={'100%'}
                    justifyContent={'space-between'}
                    gap={8}
                >
                    <Flex flexDirection='column' gap={6} flex={1}>
                        <HeaderBox>
                            <Wrap justify='space-between'>
                                <Text variant={'header-option'}>
                                    האם היה משקיען השבוע?
                                </Text>

                                <Switch
                                    colorScheme={'twitter'}
                                    size={'lg'}
                                    onChange={(e) => {
                                        setWasThereAUser(e.target.checked);
                                        resetField('user');
                                        resetField('userLink');
                                    }}
                                    defaultValue={wasThereAUser}
                                />
                            </Wrap>
                        </HeaderBox>
                        {wasThereAUser && (
                            <Wrap gap={4}>
                                <Controller
                                    control={control}
                                    name='user'
                                    rules={{ required: wasThereAUser }}
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            isInvalid={errors.user}
                                            placeholder='שם משתמש...'
                                            bg={'#fafafa'}
                                        />
                                    )}
                                />
                                <Controller
                                    control={control}
                                    name='userLink'
                                    rules={{
                                        pattern: userRegex,
                                        required: wasThereAUser,
                                    }}
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            isInvalid={errors.userLink}
                                            placeholder='קישור למשתמש...'
                                            bg={'#fafafa'}
                                        />
                                    )}
                                />
                            </Wrap>
                        )}
                    </Flex>
                    <Flex flexDirection='column' gap={6} flex={1}>
                        <HeaderBox>
                            <Wrap justify='space-between'>
                                <Text variant={'header-option'}>
                                    האם היה אשכול השבוע?
                                </Text>
                                <Switch
                                    size={'lg'}
                                    colorScheme={'twitter'}
                                    isInvalid={errors.thread}
                                    onChange={(e) => {
                                        setWasThereAThread(e.target.checked);
                                        resetField('thread');
                                        resetField('threadLink');
                                        resetField('threadUser');
                                    }}
                                />
                                {errors.hasThread && (
                                    <Text>יש בעיה בקישור לאשכול.</Text>
                                )}
                            </Wrap>
                        </HeaderBox>
                        {wasThereAThread && (
                            <Wrap gap={4}>
                                <Controller
                                    control={control}
                                    name='thread'
                                    rules={{ required: wasThereAThread }}
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            isInvalid={errors.thread}
                                            placeholder='שם האשכול...'
                                            bg={'#fafafa'}
                                        />
                                    )}
                                />
                                <Controller
                                    control={control}
                                    name='threadLink'
                                    rules={{
                                        pattern: threadRegex,
                                        required: wasThereAThread,
                                    }}
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            isInvalid={errors.threadLink}
                                            placeholder='קישור לאשכול...'
                                            bg={'#fafafa'}
                                        />
                                    )}
                                />
                                <Controller
                                    control={control}
                                    name='threadUserName'
                                    rules={{ required: wasThereAThread }}
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            isInvalid={errors.threadUserName}
                                            placeholder='שם המשתמש של פותח האשכול...'
                                            bg={'#fafafa'}
                                        />
                                    )}
                                />
                                <Controller
                                    control={control}
                                    name='threadUser'
                                    rules={{
                                        pattern: userRegex,
                                        required: wasThereAThread,
                                    }}
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            isInvalid={errors.threadUser}
                                            placeholder='קישור למשתמש פותח האשכול...'
                                            bg={'#fafafa'}
                                        />
                                    )}
                                />
                            </Wrap>
                        )}
                    </Flex>
                </Flex>
                <Wrap justify='center'>
                    <Button
                        type='submit'
                        isDisabled={Object.keys(errors).length > 0}
                        variant={'main-btn'}
                    >
                        יצירת נוסח
                    </Button>
                </Wrap>
            </form>
        </>
    );
};

const HeaderBox = ({ children }) => {
    return (
        <Box px={4} borderRadius={'full'} py={2} bg={'blackAlpha.700'}>
            {children}
        </Box>
    );
};

export default PickUsers;
