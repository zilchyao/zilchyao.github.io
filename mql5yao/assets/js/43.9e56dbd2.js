(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{640:function(t,s,n){"use strict";n.r(s);var a=n(62),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",[t._v("第十一章 账户信息")]),t._v(" "),n("p",[t._v("返回当前账户参数的函数。")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("函数")]),t._v(" "),n("th",[t._v("功能")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("AccountInfoDouble")]),t._v(" "),n("td",[t._v("返回相应账户属性的双精度值")])]),t._v(" "),n("tr",[n("td",[t._v("AccountInfoInteger")]),t._v(" "),n("td",[t._v("返回相应账户属性的整数类型值(布尔，整型或者长整型)")])]),t._v(" "),n("tr",[n("td",[t._v("AccountInfoString")]),t._v(" "),n("td",[t._v("返回相应账户属性的字符串类型值")])])])]),t._v(" "),n("h2",{attrs:{id:"_11-1-accountinfodouble"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_11-1-accountinfodouble"}},[t._v("#")]),t._v(" 11.1 AccountInfoDouble")]),t._v(" "),n("p",[t._v("返回相应账户属性的双精度值")]),t._v(" "),n("div",{staticClass:"language-cpp line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("AccountInfoDouble")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" \n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v("  property_id      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 属性标识符 ")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("p",[t._v("参数\nproperty_id")]),t._v(" "),n("p",[t._v("[in] 属性标识符，取值范围是枚举型ENUM_ACCOUNT_INFO_DOUBLE其中之一。")]),t._v(" "),n("p",[t._v("返回值\n双精度 类型值")]),t._v(" "),n("p",[t._v("示例：")]),t._v(" "),n("div",{staticClass:"language-cpp line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("OnStart")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//--- 显示AccountInfoDouble()函数中所有有效信息 ")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ACCOUNT_BALANCE =  %G"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("AccountInfoDouble")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ACCOUNT_BALANCE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 帐户余额")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ACCOUNT_CREDIT =  %G"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("AccountInfoDouble")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ACCOUNT_CREDIT"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 帐户信用额")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ACCOUNT_PROFIT =  %G"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("AccountInfoDouble")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ACCOUNT_PROFIT"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 帐户盈亏")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ACCOUNT_EQUITY =  %G"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("AccountInfoDouble")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ACCOUNT_EQUITY"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 帐户净值")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ACCOUNT_MARGIN =  %G"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("AccountInfoDouble")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ACCOUNT_MARGIN"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 帐户已用保证金")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ACCOUNT_FREEMARGIN =  %G"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("AccountInfoDouble")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ACCOUNT_FREEMARGIN"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 帐户可用保证金")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ACCOUNT_MARGIN_LEVEL =  %G"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("AccountInfoDouble")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ACCOUNT_MARGIN_LEVEL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//保证金比例 ")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ACCOUNT_MARGIN_SO_CALL = %G"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("AccountInfoDouble")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ACCOUNT_MARGIN_SO_CALL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//追加保证金水平，依据建立的ACCOUNT_MARGIN_SO_MODE，以百分比形式 或 存入货币时期表示")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ACCOUNT_MARGIN_SO_SO = %G"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("AccountInfoDouble")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ACCOUNT_MARGIN_SO_SO"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//保证金停用水平，依据建立的ACCOUNT_MARGIN_SO_MODE，以百分比形式 或 存入货币时期表示")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br")])]),n("p",[t._v("相关参考\nSymbolInfoDouble ， SymbolInfoString ， SymbolInfoInteger ， PrintFormat")]),t._v(" "),n("h2",{attrs:{id:"_11-2-accountinfointeger"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_11-2-accountinfointeger"}},[t._v("#")]),t._v(" 11.2 AccountInfoInteger")]),t._v(" "),n("p",[t._v("返回相应账户属性的整数类型值(布尔，整型或者长整型)")]),t._v(" "),n("div",{staticClass:"language-cpp line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("AccountInfoInteger")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" \n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v("  property_id      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 属性标识符 ")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("p",[t._v("参数\nproperty_id")]),t._v(" "),n("p",[t._v("[in] 属性标识符，取值范围是枚举型 ENUM_ACCOUNT_INFO_INTEGER其中之一。")]),t._v(" "),n("p",[t._v("返回值\n长整型 类型值")]),t._v(" "),n("p",[t._v("整数")]),t._v(" "),n("p",[t._v("属性可以是 布尔， 整型 或者 长整型 类型中的一个。")]),t._v(" "),n("p",[t._v("示例：")]),t._v(" "),n("div",{staticClass:"language-cpp line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("OnStart")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//--- 显示AccountInfoInteger()函数中所有有效信息 ")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ACCOUNT_LOGIN =  %d"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("AccountInfoInteger")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ACCOUNT_LOGIN"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n   "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ACCOUNT_LEVERAGE =  %d"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("AccountInfoInteger")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ACCOUNT_LEVERAGE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" thisAccountTradeAllowed"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("AccountInfoInteger")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ACCOUNT_TRADE_ALLOWED"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" EATradeAllowed"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("AccountInfoInteger")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ACCOUNT_TRADE_EXPERT"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n   ENUM_ACCOUNT_TRADE_MODE tradeMode"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ENUM_ACCOUNT_TRADE_MODE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("AccountInfoInteger")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ACCOUNT_TRADE_MODE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n   ENUM_ACCOUNT_STOPOUT_MODE stopOutMode"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ENUM_ACCOUNT_STOPOUT_MODE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("AccountInfoInteger")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ACCOUNT_MARGIN_SO_MODE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//--- 通知完成交易操作的可能性 ")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("thisAccountTradeAllowed"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n      "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Trade for this account is permitted"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" \n      "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Trade for this account is prohibited!"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//--- 找出是否可能通过EA交易进行这个账户的交易 ")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("EATradeAllowed"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n      "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Trade by Expert Advisors is permitted for this account"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" \n      "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Trade by Expert Advisors is prohibited for this account!"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//--- 找出账户类型 ")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tradeMode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n     "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ACCOUNT_TRADE_MODE_DEMO"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" \n         "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This is a demo account"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n         "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ACCOUNT_TRADE_MODE_CONTEST"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" \n         "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This is a competition account"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n         "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This is a real account!"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n     "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//--- 找出止损离场水平设置模式 ")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stopOutMode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n     "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ACCOUNT_STOPOUT_MODE_PERCENT"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" \n         "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The StopOut level is specified percentage"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n         "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The StopOut level is specified in monetary terms"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n     "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br"),n("span",{staticClass:"line-number"},[t._v("33")]),n("br"),n("span",{staticClass:"line-number"},[t._v("34")]),n("br"),n("span",{staticClass:"line-number"},[t._v("35")]),n("br"),n("span",{staticClass:"line-number"},[t._v("36")]),n("br"),n("span",{staticClass:"line-number"},[t._v("37")]),n("br"),n("span",{staticClass:"line-number"},[t._v("38")]),n("br"),n("span",{staticClass:"line-number"},[t._v("39")]),n("br"),n("span",{staticClass:"line-number"},[t._v("40")]),n("br"),n("span",{staticClass:"line-number"},[t._v("41")]),n("br"),n("span",{staticClass:"line-number"},[t._v("42")]),n("br"),n("span",{staticClass:"line-number"},[t._v("43")]),n("br")])]),n("p",[t._v("相关参考\n账户信息")]),t._v(" "),n("h2",{attrs:{id:"_11-3-accountinfostring"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_11-3-accountinfostring"}},[t._v("#")]),t._v(" 11.3 AccountInfoString")]),t._v(" "),n("p",[t._v("返回相应账户属性的字符串类型值")]),t._v(" "),n("div",{staticClass:"language-cpp line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[t._v("string  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("AccountInfoString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" \n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v("  property_id      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 属性标识符 ")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("p",[t._v("参数\nproperty_id")]),t._v(" "),n("p",[t._v("[in] 属性标识符，取值范围是枚举型 ENUM_ACCOUNT_INFO_STRING其中之一。")]),t._v(" "),n("p",[t._v("返回值\n字符串 类型值")]),t._v(" "),n("p",[t._v("示例：")]),t._v(" "),n("div",{staticClass:"language-cpp line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("OnStart")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//--- 显示AccountInfoString()函数中所有有效信息 ")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The name of the broker = "')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("AccountInfoString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ACCOUNT_COMPANY"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n   "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Deposit currency = "')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("AccountInfoString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ACCOUNT_CURRENCY"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n   "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Client name = "')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("AccountInfoString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ACCOUNT_NAME"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n   "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The name of the trade server = "')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("AccountInfoString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ACCOUNT_SERVER"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br")])]),n("p",[t._v("相关参考\n账户信息")])])}),[],!1,null,null,null);s.default=e.exports}}]);