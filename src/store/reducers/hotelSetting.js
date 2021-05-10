const initState = {
  // 平台 (进单、投放)
  platform: [
    { value: 'FEIZHU_WEELFLYPLANET', name: '飞猪嗨飞' },
    { value: 'FEIZHU_YOUBEI', name: '飞猪游贝' },
    { value: 'TONGCHENG', name: '同程嗨飞' },
    { value: 'TONGCHENG_YOUBEI', name: '同程游贝' },
    { value: 'MEITUAN', name: '美团' },
    { value: 'QUNAR_YOUBEI', name: '去哪儿游贝' },
    { value: 'ALL', name: 'ALL' }
  ]
};
export default function hotelSetting(state = initState, action) {
      return state;
}
