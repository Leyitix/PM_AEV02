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

  const [system, setSystem] = useState([]);
  const [thisSystem, setThisSystem] = useState([]);

  const [app, setApp] = useState([]);
  const [thisApp, setThisApp] = useState([]);

  const [framework, setFramework] = useState([]);
  const [thisFramework, setThisFramework] = useState([]);

  let contadorDev = 0;
  let contadorSys = 0;
  let contadorApp = 0;
  let contadorFramework = 0;
  let verificacion = false;

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
      verificacion = true;
    } else if (e == "2") {
      word = "developer";
      arrayLetras = developer;
      thisInput = thisDeveloper;
      console.log("modificar developer: " + developer);
      if (contadorDev == 0 && verificacion == true) {
        developer.splice(6, 0, developer[0]);
        developer.shift();
        contadorDev = 1;
      }
    } else if (e == "3") {
      word = "system";
      arrayLetras = system;
      thisInput = thisSystem;
      console.log("modificar system: " + system);
      if (contadorSys == 0 && verificacion == true) {
        system.splice(4, 0, system[0]);
        system.shift();
        contadorSys = 1;
      }
    } else if (e == "4") {
      word = "app";
      arrayLetras = app;
      thisInput = thisApp;
      console.log("modificar app: " + app);
      if (contadorApp == 0 && verificacion == true) {
        app.splice(0, 0, app[0]);
        app.shift();
        contadorApp = 1;
      }
    } else if (e == "5") {
      word = "framework";
      arrayLetras = framework;
      thisInput = thisFramework;
      if (contadorFramework == 0 && verificacion == true) {
        framework.splice(5, 0, framework[0]);
        framework.shift();
        console.log("modificar framework: " + framework);
        contadorFramework = 1;
      }
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
                            this.developer_O = input;
                            thisSoftware.push(this.software_O);
                            thisDeveloper.push(this.developer_O);
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
                          onChangeText={(newText) => system.push(newText)}
                          ref={(input) => {
                            this.system_S = input;
                            thisSystem.push(this.system_S);
                          }}
                        />
                      </View>
                      <View style={{ padding: 2, borderWidth: 1 }}>
                        <TextInput
                          placeholder={"Y"}
                          size="20"
                          defaultValue={0}
                          onChangeText={(newText) => system.push(newText)}
                          ref={(input) => {
                            this.system_Y = input;
                            thisSystem.push(this.system_Y);
                          }}
                        />
                      </View>
                      <View style={{ padding: 2, borderWidth: 1 }}>
                        <TextInput
                          placeholder={"S"}
                          size="20"
                          defaultValue={0}
                          onChangeText={(newText) => system.push(newText)}
                          ref={(input) => {
                            this.system_S = input;
                            thisSystem.push(this.system_S);
                          }}
                        />
                      </View>
                      <View style={{ padding: 2, borderWidth: 1 }}>
                        <TextInput
                          placeholder={"T"}
                          size="20"
                          defaultValue={0}
                          onChangeText={(newText) => {
                            software.push(newText);
                            system.push(newText);
                          }}
                          ref={(input) => {
                            this.software_T = input;
                            this.system_T = input;
                            thisSoftware.push(this.software_T);
                            thisSystem.push(this.system_T);
                          }}
                        />
                      </View>
                      <View style={{ padding: 2, borderWidth: 1 }}>
                        <TextInput
                          placeholder={"E"}
                          size="20"
                          defaultValue={0}
                          onChangeText={(newText) => system.push(newText)}
                          ref={(input) => {
                            this.system_E = input;
                            thisSystem.push(this.system_E);
                          }}
                        />
                      </View>
                      <View style={{ padding: 2, borderWidth: 1 }}>
                        <TextInput
                          placeholder={"M"}
                          size="20"
                          defaultValue={0}
                          onChangeText={(newText) => system.push(newText)}
                          ref={(input) => {
                            this.system_M = input;
                            thisSystem.push(this.system_M);
                          }}
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
                          onChangeText={(newText) => {
                            software.push(newText);
                            app.push(newText);
                          }}
                          ref={(input) => {
                            this.software_A = input;
                            this.app_A = input;
                            thisSoftware.push(this.software_A);
                            thisApp.push(this.app_A);
                          }}
                        />
                      </View>
                      <View style={{ padding: 2, borderWidth: 1 }}>
                        <TextInput
                          placeholder={"P"}
                          size="20"
                          defaultValue={0}
                          onChangeText={(newText) => app.push(newText)}
                          ref={(input) => {
                            this.app_P = input;
                            thisApp.push(this.app_P);
                          }}
                        />
                      </View>
                      <View style={{ padding: 2, borderWidth: 1 }}>
                        <TextInput
                          placeholder={"P"}
                          size="20"
                          defaultValue={0}
                          onChangeText={(newText) => app.push(newText)}
                          ref={(input) => {
                            this.app_P = input;
                            thisApp.push(this.app_P);
                          }}
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
                          onChangeText={(newText) => framework.push(newText)}
                          ref={(input) => {
                            this.framework_F = input;
                            thisFramework.push(this.framework_F);
                          }}
                        />
                      </View>
                      <View style={{ padding: 2, borderWidth: 1 }}>
                        <TextInput
                          placeholder={"R"}
                          size="20"
                          defaultValue={0}
                          onChangeText={(newText) => framework.push(newText)}
                          ref={(input) => {
                            this.framework_R = input;
                            thisFramework.push(this.framework_R);
                          }}
                        />
                      </View>
                      <View style={{ padding: 2, borderWidth: 1 }}>
                        <TextInput
                          placeholder={"A"}
                          size="20"
                          defaultValue={0}
                          onChangeText={(newText) => framework.push(newText)}
                          ref={(input) => {
                            this.framework_A = input;
                            thisFramework.push(this.framework_A);
                          }}
                        />
                      </View>
                      <View style={{ padding: 2, borderWidth: 1 }}>
                        <TextInput
                          placeholder={"M"}
                          size="20"
                          defaultValue={0}
                          onChangeText={(newText) => framework.push(newText)}
                          ref={(input) => {
                            this.framework_M = input;
                            thisFramework.push(this.framework_M);
                          }}
                        />
                      </View>
                      <View style={{ padding: 2, borderWidth: 1 }}>
                        <TextInput
                          placeholder={"E"}
                          size="20"
                          defaultValue={0}
                          onChangeText={(newText) => {
                            software.push(newText);
                            framework.push(newText);
                          }}
                          ref={(input) => {
                            this.software_E = input;
                            this.framework_E = input;
                            thisSoftware.push(this.software_E);
                            thisFramework.push(this.framework_E);
                          }}
                        />
                      </View>
                      <View style={{ padding: 2, borderWidth: 1 }}>
                        <TextInput
                          placeholder={"W"}
                          size="20"
                          defaultValue={0}
                          onChangeText={(newText) => framework.push(newText)}
                          ref={(input) => {
                            this.framework_W = input;
                            thisFramework.push(this.framework_W);
                          }}
                        />
                      </View>
                      <View style={{ padding: 2, borderWidth: 1 }}>
                        <TextInput
                          placeholder={"O"}
                          size="20"
                          defaultValue={0}
                          onChangeText={(newText) => framework.push(newText)}
                          ref={(input) => {
                            this.framework_O = input;
                            thisFramework.push(this.framework_O);
                          }}
                        />
                      </View>
                      <View style={{ padding: 2, borderWidth: 1 }}>
                        <TextInput
                          placeholder={"R"}
                          size="20"
                          defaultValue={0}
                          onChangeText={(newText) => framework.push(newText)}
                          ref={(input) => {
                            this.framework_R = input;
                            thisFramework.push(this.framework_R);
                          }}
                        />
                      </View>
                      <View style={{ padding: 2, borderWidth: 1 }}>
                        <TextInput
                          placeholder={"K"}
                          size="20"
                          defaultValue={0}
                          onChangeText={(newText) => framework.push(newText)}
                          ref={(input) => {
                            this.framework_K = input;
                            thisFramework.push(this.framework_K);
                          }}
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
