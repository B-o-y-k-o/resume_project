import { FC, CSSProperties, useCallback, ChangeEvent } from "react";
import { Flex, Tabs, Input, Select } from "antd";
import type { TabsProps, SelectProps, InputProps } from "antd";

export type TFilterbarProps = {
  onTabs: (key: string) => void;
  currentTabs: string;
  onFilter: (selectValue?: string, inputFillter?: string) => void;
};

const filterbarStyle: CSSProperties = {
  padding: "5px",
};

const tabs: TabsProps["items"] = [
  {
    key: "1",
    label: "Курсы",
  },
  {
    key: "2",
    label: "Термины",
  },
];

const select: SelectProps<string>["options"] = [
  {
    value: "all",
    label: "Фильтровать",
  },
  {
    value: "passed",
    label: <span>Пройденные</span>,
  },
  {
    value: "new",
    label: <span>Новые</span>,
  },
];

export const Filterbar: FC<TFilterbarProps> = (props) => {
  const { onTabs, currentTabs, onFilter } = props;

  const onChange = useCallback(
    (key: string) => {
      onTabs(key);
    },
    [onTabs]
  );

  const onChangeSelect: SelectProps<string>["onChange"] = useCallback(
    (value: string) => {
      // console.log('onChangeSelect>>start');
      onFilter(value);
    },
    [onFilter]
  );

  const onChangeInput: InputProps["onChange"] = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onFilter(undefined, event.target.value);
    },
    [onFilter]
  );

  return (
    <Flex style={filterbarStyle} gap={20} align="center" justify="space-between">
      <Tabs style={{ flex: "2" }} defaultActiveKey={currentTabs} items={tabs} onChange={onChange}></Tabs>
      <Select
        style={{ minWidth: "130px" }}
        defaultValue={select[0].value as string} //TODO fix generic
        options={select}
        onChange={onChangeSelect}
      ></Select>
      <Flex>
        <Input style={{ flex: "1" }} placeholder="Поиск..." allowClear onChange={onChangeInput} />
      </Flex>
    </Flex>
  );
};
