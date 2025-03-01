import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useContext } from 'react';
import UserBackground from '~/components/UserBackground';
import { ThemeContext } from '~/context/ThemeContext';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import CustomeText from '~/components/CustomeText';
import CustomeRadioButton from '~/components/CustomeRadioButton';
import { useMemo, useState } from 'react';
import TextButton from '~/components/TextButton';
import Footer from '~/components/Footer';
export default function OcupationInterestHome() {
  const { colors } = useContext(ThemeContext);
  const [checked, setChecked] = useState('SoftwareDevelopment');
  const [seeMore, setSeeMore] = useState(false);
  const [checked2, setChecked2] = useState('no');

  // Radio buttons management

  const radioList = [
    { value: 'SoftwareDevelopment', title: 'Software Development' },
    { value: 'DataAnalytics', title: 'Data & Analytics' },
    { value: 'InformationTechnology', title: 'Information Technology' },
    { value: 'Marketing', title: 'Marketing' },
    { value: 'Design', title: 'Design' },
    { value: 'FinanceAccounting', title: 'Finance & Accounting' },
    { value: 'ProductProjectManagement', title: 'Product & Project Management' },
    { value: 'BusinessOperations', title: 'Business Operations' },
    { value: 'SalesBusinessDevelopment', title: 'Sales & Business Development' },
    { value: 'HumanResources', title: 'Human Resources' },
    { value: 'EducationTraining', title: 'Education & Training' },
    { value: 'CustomerSupport', title: 'Customer Support' },
    { value: 'HealthWellness', title: 'Health & Wellness' },
    { value: 'Writing', title: 'Writing' },
    { value: 'Legal', title: 'Legal' },
    { value: 'Art', title: 'Art' },
    { value: 'None', title: 'None of the above' },
  ];
  const options = [
    { value: 'yes', title: 'Yes' },
    { value: 'no', title: 'No' },
  ];

  return (
    <View className="flex-1" style={{ backgroundColor: colors.backgroundColor }}>
      <UserBackground className="flex-1">
        <View className=" ml-10 justify-center  ">
          <View
            style={{
              backgroundColor: 'rgba(60, 65, 69, 0.2)',
              width: '90%',
              padding: 10,
              borderRadius: 6,
              gap: 15,
            }}
            className=" mt-10 flex-row  ">
            <MaterialIcons name="person" size={24} color="#FFC785" />

            <Text style={{ color: colors.textColor }}>
              Answer a few questions to improve your {'\n'} content recommedndations
            </Text>
          </View>

          {/* form  */}
          <CustomeText className=" mb-10  font-serif text-xl font-bold">
            What field are you {'\n'} learning for ?
          </CustomeText>
          {/* form  */}
          <View>
            {/* holds mapping the radio value and also see more option  */}
            {radioList.map((radio, index) => {
              if (!seeMore) {
                if (index < 3) {
                  return (
                    <CustomeRadioButton
                      key={index}
                      onPress={() => {
                        setChecked(radio.value);
                        console.log(radio.value);
                      }}
                      value={radio.value}
                      title={radio.title}
                      status={checked === radio.value ? 'checked' : 'unchecked'}
                    />
                  );
                }
              } else {
                return (
                  <CustomeRadioButton
                    key={index}
                    onPress={() => {
                      setChecked(radio.value);
                      console.log(radio.value);
                    }}
                    value={radio.value}
                    title={radio.title}
                    status={checked === radio.value ? 'checked' : 'unchecked'}
                  />
                );
              }
            })}
            <TextButton
              style={{
                color: colors.buttonText,
              }}
              className="mt-3 font-bold"
              onPress={() => {
                setSeeMore(!seeMore);
              }}
              title={seeMore ? 'See less' : 'See more'}
            />

            {/* Mangele peple  */}
            <CustomeText className=" mb-10  font-sans text-xl ">
              Do you currently manage people ?
            </CustomeText>
            {options.map((option, index) => (
              <CustomeRadioButton
                key={index}
                value={option.value}
                status={checked2 === option.value ? 'checked' : 'unchecked'}
                title={option.title}
                onPress={() => {
                  setChecked2(option.value);
                  console.log(` Do you currently manage people ? ${option.value}`);
                }}
              />
            ))}
          </View>
        </View>
      </UserBackground>
      {/* Custome footer  */}
      <Footer>
        <TouchableOpacity
          className="w-md align-center mb-4 flex-row flex-row  justify-center border-2 p-1"
          style={{ height: '40', width: '87%', backgroundColor: colors.btnbgcolor }}>
          <Text className=" text-xl font-bold" style={{ color: colors.btntextcolor }}>
            Start Learning
          </Text>{' '}
        </TouchableOpacity>
      </Footer>
    </View>
  );
}
