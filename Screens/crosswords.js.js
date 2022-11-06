import { TextInput, Text, ScrollView, View } from "react-native";
import { useState } from "react";
import { Center, Box, Heading, VStack, NativeBaseProvider } from "native-base";

export default function Crosswords() {
  const [softwareDefinition, setSoftDefinition] = useState();
  const [developerDefinition, setDevtDefinition] = useState();
  const [systemDefinition, setSysDefinition] = useState();
  const [appDefinition, setAppDefinition] = useState();
  const [frameworkDefinition, setFrameDefinition] = useState();

  const [software, setSoftware] = useState([]);
  const [thisSoftware, setThisSoftware] = useState([]);

  const [developer, setDeveloper] = useState([]);
  const [thisDeveloper, setThisDeveloper] = useState([]);

  const getDatos = async () => {
    try {
      const software = await fetch(
        "https://api.dictionaryapi.dev/api/v2/entries/en/software"
      );
      const developer = await fetch(
        "https://api.dictionaryapi.dev/api/v2/entries/en/developer"
      );
      const system = await fetch(
        "https://api.dictionaryapi.dev/api/v2/entries/en/system"
      );
      const app = await fetch(
        "https://api.dictionaryapi.dev/api/v2/entries/en/app"
      );
      const framework = await fetch(
        "https://api.dictionaryapi.dev/api/v2/entries/en/framework"
      );
      if (software.ok) {
        const datosSoftware = await software.json();
        setSoftDefinition(
          datosSoftware[0].meanings[0].definitions[0].definition
        );
      }
      if (developer.ok) {
        const datosDeveloper = await developer.json();
        setDevtDefinition(
          datosDeveloper[0].meanings[0].definitions[0].definition
        );
      }
      if (system.ok) {
        const datosSystem = await system.json();
        setSysDefinition(datosSystem[0].meanings[0].definitions[0].definition);
      }
      if (app.ok) {
        const datosApp = await app.json();
        setAppDefinition(datosApp[0].meanings[0].definitions[0].definition);
      }
      if (framework.ok) {
        const datosFramework = await framework.json();
        setFrameDefinition(
          datosFramework[0].meanings[0].definitions[0].definition
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  function numberOnPress(e) {
    let word = "";
    let arrayLetras = [];
    let thisInput = [];

    if (e == "1") {
      word = "software";
      arrayLetras = software;
      thisInput = thisSoftware;
    } else if (e == "2") {
      word = "developer";
      arrayLetras = developer;
      developer.splice(6, 0, developer[0]);
      developer.shift();
      console.log("modificar developer: " + developer);
    }

    console.log(word);
    for (let i = word.length - 1; i >= 0; i--) {
      if (arrayLetras[i] == "") {
        let ultimoIndex = arrayLetras.length - 1;
        console.log("ultimo elemento " + arrayLetras[ultimoIndex]);
        [arrayLetras[i], arrayLetras[ultimoIndex]] = [
          arrayLetras[ultimoIndex],
          arrayLetras[i],
        ];
        arrayLetras.pop();
        console.log(arrayLetras);
      }
    }

    for (let i = 0; i < word.length; i++) {
      if (word[i] != arrayLetras[i]) {
        console.log("antes " + arrayLetras);
        thisInput[i].clear();
        arrayLetras[i] = "";
        console.log("despues " + arrayLetras);
      }
    }
  }

  return (
    <NativeBaseProvider>
      <Center w="100%">
        <Box safeArea p="2" w="90%" maxW="290" py="5">
          <Heading
            size="lg"
            color="coolGray.800"
            _dark={{ color: "warmGray.50" }}
            fontSize="50"
            fontWeight="semibold"
            onPress={getDatos}
          >
            Crosswords
          </Heading>

          <VStack space={2} mt="5">
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flexDirection: "column" }}>
                  <View style={{ flexDirection: "column" }}>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ width: 134 }}></View>
                      <View style={{ width: 16 }}>
                        <Text
                          style={{ fontSize: 20 }}
                          onPress={() => numberOnPress("1")}
                        >
                          1
                        </Text>
                      </View>
                      <View style={{ padding: 2, borderWidth: 1 }}>
                        <TextInput
                          placeholder={"S"}
                          size="20"
                          defaultValue={0}
                          onChangeText={(newText) => software.push(newText)}
                          ref={(input) => {
                            this.software_S = input;
                            thisSoftware.push(this.software_S);
                          }}
                        />
                      </View>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                      <View style={{ width: 16 }}>
                        <Text
                          style={{ fontSize: 20 }}
                          onPress={() => numberOnPress("2")}
                        >
                          2
                        </Text>
                      </View>
                      <View style={{ padding: 2, borderWidth: 1 }}>
                        <TextInput
                          placeholder={"D"}
                          size="20"
                          defaultValue={0}
                          onChangeText={(newText) => developer.push(newText)}
                          ref={(input) => {
                            this.developer_D = input;
                            thisDeveloper.push(this.developer_D);
                          }}
                        />
                      </View>
                      <View style={{ padding: 2, borderWidth: 1 }}>
                        <TextInput
                          placeholder={"E"}
                          size="20"
                          defaultValue={0}
                          onChangeText={(newText) => developer.push(newText)}
                          ref={(input) => {
                            this.developer_E = input;
                            thisDeveloper.push(this.developer_E);
                          }}
                        />
                      </View>
                      <View style={{ padding: 2, borderWidth: 1 }}>
                        <TextInput
                          placeholder={"V"}
                          size="20"
                          defaultValue={0}
                          onChangeText={(newText) => developer.push(newText)}
                          ref={(input) => {
                            this.developer_V = input;
                            thisDeveloper.push(this.developer_V);
                          }}
                        />
                      </View>
                      <View style={{ padding: 2, borderWidth: 1 }}>
                        <TextInput
                          placeholder={"E"}
                          size="20"
                          defaultValue={0}
                          onChangeText={(newText) => developer.push(newText)}
                          ref={(input) => {
                            this.developer_E = input;
                            thisDeveloper.push(this.developer_E);
                          }}
                        />
                      </View>
                      <View style={{ padding: 2, borderWidth: 1 }}>
                        <TextInput
                          placeholder={"L"}
                          size="20"
                          defaultValue={0}
                          onChangeText={(newText) => developer.push(newText)}
                          ref={(input) => {
                            this.developer_L = input;
                            thisDeveloper.push(this.developer_L);
                          }}
                        />
                      </View>
                      <View style={{ padding: 2, borderWidth: 1 }}>
                        <TextInput
                          placeholder={"O"}
                          size="20"
                          defaultValue={0}
                          onChangeText={(newText) => {
                            software.push(newText);
                            developer.push(newText);
                          }}
                          ref={(input) => {
                            this.software_O = input;
                            thisSoftware.push(this.software_O);
                          }}
                        />
                      </View>
                      <View style={{ padding: 2, borderWidth: 1 }}>
                        <TextInput
                          placeholder={"P"}
                          size="20"
                          defaultValue={0}
                          onChangeText={(newText) => developer.push(newText)}
                          ref={(input) => {
                            this.developer_P = input;
                            thisDeveloper.push(this.developer_P);
                          }}
                        />
                      </View>
                      <View style={{ padding: 2, borderWidth: 1 }}>
                        <TextInput
                          placeholder={"E"}
                          size="20"
                          defaultValue={0}
                          onChangeText={(newText) => developer.push(newText)}
                          ref={(input) => {
                            this.developer_E = input;
                            thisDeveloper.push(this.developer_E);
                          }}
                        />
                      </View>
                      <View style={{ padding: 2, borderWidth: 1 }}>
                        <TextInput
                          placeholder={"R"}
                          size="20"
                          defaultValue={0}
                          onChangeText={(newText) => developer.push(newText)}
                          ref={(input) => {
                            this.developer_R = input;
                            thisDeveloper.push(this.developer_R);
                          }}
                        />
                      </View>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                      <View style={{ width: 150 }}></View>
                      <View style={{ padding: 2, borderWidth: 1 }}>
                        <TextInput
                          placeholder={"F"}
                          size="20"
                          defaultValue={0}
                          onChangeText={(newText) => software.push(newText)}
                          ref={(input) => {
                            this.software_F = input;
                            thisSoftware.push(this.software_F);
                          }}
                        />
                      </View>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                      <View style={{ width: 54 }}></View>
                      <View style={{ width: 16 }}>
                        <Text
                          style={{ fontSize: 20 }}
                          onPress={() => numberOnPress("3")}
                        >
                          3
                        </Text>
                      </View>
                      <View style={{ padding: 2, borderWidth: 1 }}>
                        <TextInput
                          placeholder={"S"}
                          size="20"
                          defaultValue={0}
                        />
                      </View>
                      <View style={{ padding: 2, borderWidth: 1 }}>
                        <TextInput
                          placeholder={"Y"}
                          size="20"
                          defaultValue={0}
                        />
                      </View>
                      <View style={{ padding: 2, borderWidth: 1 }}>
                        <TextInput
                          placeholder={"S"}
                          size="20"
                          defaultValue={0}
                        />
                      </View>
                      <View style={{ padding: 2, borderWidth: 1 }}>
                        <TextInput
                          placeholder={"T"}
                          size="20"
                          defaultValue={0}
                          onChangeText={(newText) => software.push(newText)}
                          ref={(input) => {
                            this.software_T = input;
                            thisSoftware.push(this.software_T);
                          }}
                        />
                      </View>
                      <View style={{ padding: 2, borderWidth: 1 }}>
                        <TextInput
                          placeholder={"E"}
                          size="20"
                          defaultValue={0}
                        />
                      </View>
                      <View style={{ padding: 2, borderWidth: 1 }}>
                        <TextInput
                          placeholder={"M"}
                          size="20"
                          defaultValue={0}
                        />
                      </View>
                      <View style={{ width: 64 }}></View>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                      <View style={{ width: 150 }}></View>
                      <View style={{ padding: 2, borderWidth: 1 }}>
                        <TextInput
                          placeholder={"W"}
                          size="20"
                          defaultValue={0}
                          onChangeText={(newText) => software.push(newText)}
                          ref={(input) => {
                            this.software_W = input;
                            thisSoftware.push(this.software_W);
                          }}
                        />
                      </View>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                      <View style={{ width: 134 }}></View>
                      <View style={{ width: 16 }}>
                        <Text
                          style={{ fontSize: 20 }}
                          onPress={() => numberOnPress("4")}
                        >
                          4
                        </Text>
                      </View>
                      <View style={{ padding: 2, borderWidth: 1 }}>
                        <TextInput
                          placeholder={"A"}
                          size="20"
                          defaultValue={0}
                          onChangeText={(newText) => software.push(newText)}
                          ref={(input) => {
                            this.software_A = input;
                            thisSoftware.push(this.software_A);
                          }}
                        />
                      </View>
                      <View style={{ padding: 2, borderWidth: 1 }}>
                        <TextInput
                          placeholder={"P"}
                          size="20"
                          defaultValue={0}
                        />
                      </View>
                      <View style={{ padding: 2, borderWidth: 1 }}>
                        <TextInput
                          placeholder={"P"}
                          size="20"
                          defaultValue={0}
                        />
                      </View>
                      <View style={{ width: 64 }}></View>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                      <View style={{ width: 150 }}></View>
                      <View style={{ padding: 2, borderWidth: 1 }}>
                        <TextInput
                          placeholder={"R"}
                          size="20"
                          defaultValue={0}
                          onChangeText={(newText) => software.push(newText)}
                          ref={(input) => {
                            this.software_R = input;
                            thisSoftware.push(this.software_R);
                          }}
                        />
                      </View>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                      <View style={{ width: 27 }}></View>
                      <View style={{ width: 16 }}>
                        <Text
                          style={{ fontSize: 20 }}
                          onPress={() => numberOnPress("5")}
                        >
                          5
                        </Text>
                      </View>
                      <View style={{ padding: 2, borderWidth: 1 }}>
                        <TextInput
                          placeholder={"F"}
                          size="20"
                          defaultValue={0}
                        />
                      </View>
                      <View style={{ padding: 2, borderWidth: 1 }}>
                        <TextInput
                          placeholder={"R"}
                          size="20"
                          defaultValue={0}
                        />
                      </View>
                      <View style={{ padding: 2, borderWidth: 1 }}>
                        <TextInput
                          placeholder={"A"}
                          size="20"
                          defaultValue={0}
                        />
                      </View>
                      <View style={{ padding: 2, borderWidth: 1 }}>
                        <TextInput
                          placeholder={"M"}
                          size="20"
                          defaultValue={0}
                        />
                      </View>
                      <View style={{ padding: 2, borderWidth: 1 }}>
                        <TextInput
                          placeholder={"E"}
                          size="20"
                          defaultValue={0}
                          onChangeText={(newText) => software.push(newText)}
                          ref={(input) => {
                            this.software_E = input;
                            thisSoftware.push(this.software_E);
                          }}
                        />
                      </View>
                      <View style={{ padding: 2, borderWidth: 1 }}>
                        <TextInput
                          placeholder={"W"}
                          size="20"
                          defaultValue={0}
                        />
                      </View>
                      <View style={{ padding: 2, borderWidth: 1 }}>
                        <TextInput
                          placeholder={"O"}
                          size="20"
                          defaultValue={0}
                        />
                      </View>
                      <View style={{ padding: 2, borderWidth: 1 }}>
                        <TextInput
                          placeholder={"R"}
                          size="20"
                          defaultValue={0}
                        />
                      </View>
                      <View style={{ padding: 2, borderWidth: 1 }}>
                        <TextInput
                          placeholder={"K"}
                          size="20"
                          defaultValue={0}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>

              <ScrollView>
                <View style={{ height: 27 }}></View>
                <Heading
                  size="lg"
                  color="coolGray.800"
                  _dark={{ color: "warmGray.50" }}
                  fontSize="30"
                  fontWeight="semibold"
                >
                  Definitions
                </Heading>
                <Text>1. {softwareDefinition}</Text>
                <Text>2. {developerDefinition}</Text>
                <Text>3. {systemDefinition}</Text>
                <Text>4. {appDefinition}</Text>
                <Text>5. {frameworkDefinition}</Text>
              </ScrollView>
            </View>
          </VStack>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
}
