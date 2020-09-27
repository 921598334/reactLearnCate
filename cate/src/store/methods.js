import store from "./data";



const tmp1 = {
    "ret": true,
    "data": {
        "data": {
            "热门": ["饮品", "清淡", "夏季菜谱", "下饭菜", "面食", "粥", "晚餐", "汤", "面条", "汤羹", "烤箱", "中餐", "西餐", "孕妇", "蛋糕", "东北菜", "凉拌", "煲汤", "布丁", "寿司", "糕点", "糖水", "湘菜", "甜点"],
            "菜式": ["家常菜", "素菜", "凉菜", "下饭菜", "面食", "小吃", "粥", "汤", "煲汤", "私房菜", "汤羹", "糕点", "甜点", "饮品", "创意菜", "腌制", "自制蘸料", "冰品", "热菜", "农家菜", "荤菜", "主食", "宴客菜", "开胃菜", "海鲜", "下酒菜", "懒人食谱", "卤菜"],
            "菜系": ["川菜", "东北菜", "粤菜", "湘菜", "西餐", "鲁菜", "韩式料理", "日式料理", "淮扬菜", "闽菜", "浙菜", "徽菜", "清真", "苏菜", "东南亚", "贵州菜", "本帮菜", "法国菜", "新疆菜", "潮州菜", "客家菜", "意大利菜", "泰国菜", "英国菜", "台湾美食", "香港美食", "豫菜", "印度菜", "云南菜", "西班牙菜", "赣菜", "京菜", "澳大利亚菜", "晋菜", "鄂菜"],
            "特色": ["泡菜", "冰淇淋", "粽子", "沙拉", "油条", "豆浆", "零食", "布丁", "糖水", "自制食材", "果汁", "果冻", "糖果", "果茶", "酸菜", "青团", "香锅", "饮料"],
            "烘焙": ["蛋糕", "披萨", "面包", "月饼", "吐司", "饼干", "杯子蛋糕", "蛋挞", "曲奇", "派", "泡芙", "慕斯", "小蛋糕", "马卡龙", "戚风蛋糕", "提拉米苏", "海绵蛋糕", "奶油蛋糕", "挞", "翻糖蛋糕", "磅蛋糕"],
            "主食": ["寿司", "饼", "炒饭", "馒头", "饺子", "炒面"],
            "器具": ["烤箱", "炒锅", "微波炉"],
            "烹饪方式": ["烘焙", "拌", "火锅", "蒸", "煮", "卤"],
            "口味": ["清淡", "咖喱", "麻辣", "香辣"],
            "场合": ["早餐", "晚餐", "中餐", "下午茶", "宵夜", "熬夜餐", "春季菜谱", "早茶", "夏季菜谱", "秋季菜谱", "冬季菜谱", "朋友聚餐", "二人世界", "户外野炊", "深夜食堂", "单身食谱", "早午餐"],
            "节日": ["春节", "年夜饭", "中秋节", "元旦"]
        },
        "material": {
            "肉类": ["猪肉", "排骨", "猪蹄", "牛肉"],
            "蛋/奶": ["鸡蛋", "鸭蛋", "鹌鹑蛋", "咸鸭蛋", "松花蛋"],
            "鱼类": ["草鱼", "鲤鱼", "鲫鱼"],
            "水产": ["虾", "虾米", "龙虾", "河虾"],
            "蔬菜": ["白菜", "油菜", "芹菜", "菠菜", "茼蒿"],
            "豆类": ["绿豆芽", "黄豆芽", "黄豆"],
            "果品类": ["苹果", "香蕉"],
            "五谷杂粮": ["荞麦面", "麦芽", "小米"],
            "药食": ["燕窝", "人参"],
            "调味品": ["榨菜", "冬菜"],
            "其他": ["巧克力"]
        }
    }
  }
  
  
  
  const tmp2={
    "ret": true,
    "data": {
  
      "data": {
        "肉类": ["猪肉", "排骨", "猪蹄", "牛肉"],
        "蛋/奶": ["鸡蛋", "鸭蛋", "鹌鹑蛋", "咸鸭蛋", "松花蛋"],
        "鱼类": ["草鱼", "鲤鱼", "鲫鱼"],
        "水产": ["虾", "虾米", "龙虾", "河虾"],
        "蔬菜": ["白菜", "油菜", "芹菜", "菠菜", "茼蒿"],
        "豆类": ["绿豆芽", "黄豆芽", "黄豆"],
        "果品类": ["苹果", "香蕉"],
        "五谷杂粮": ["荞麦面", "麦芽", "小米"],
        "药食": ["燕窝", "人参"],
        "调味品": ["榨菜", "冬菜"],
        "其他": ["巧克力"]
      }
    }
  }
  
  //把tmp转化为data
  function convery(param) {
  
    console.log("convery被执行了")
  
    let myData=[]
    let category = param.data.data;
  
  
    let i = 0;
  
    //map用这种方式便利
    for (let item in category) {
  
        console.log("item:" + item)
        console.log(category[item])
  
  
        let myChildren = [];
       //list用这种方式便利
        category[item].map((valueTmo, keyTmp) => {
           
            myChildren.push({
                label: valueTmo,
                value: keyTmp
            })
  
        })
  
  
        let myItem = {
            value: i,
            label: item,
            children: myChildren
  
        }
    
        myData.push(myItem)
        ++i
        
        
    }
    
    return myData
  }
  
  




let methods = {
    add: function (state, action) {
        state.num++
        return state
    },
    addNum: function (state, action) {

        state.num = state.num + action.num;
        return state
    },
    setTimu: function (state, action) {

        state.timuList = action.content;

        console.log("methods中设置的timuList为：");
        console.log(state.timuList);

        return state
    },


    setCategory: function (state, action) {

        state.category = action.category;

        if(action.category==="菜品"){
            console.log("菜品设置成功")
            state.menuData = convery(tmp1)
        }else{
            console.log("食材设置成功")
            state.menuData = convery(tmp2)
        }

        return state
    }

}

export default methods;