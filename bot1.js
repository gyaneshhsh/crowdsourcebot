'use strict';
const Discord = require("discord.js");
var client = new Discord.Client;
var bot = new Discord.Client;
client.login("NDk1MDQ3MzIxNTQ2MTI5NDE0.XoGyrQ.u4VhXobMXMXSI1_lZAyy5eFJM6k", output);
bot.login("NjIyNDI3NDcwOTgwOTcyNTQ1.XoHSew.TMeIGV8mgtwNwwDcw6td9jHzsgo", output);
/** @type {!Array} */
var hqchannels = ["459842150323060736","535628205139296256","536606600291549194"];
/** @type {!Array} */
var lochannels = ["514517095996981264","535773736549482506","531377981550231552"];
/** @type {!Array} */
var bbchannels = ['514517233544986627'];
/** @type {string} */
var outputchannel = "535737044639416340";
/**
 * @param {?} context
 * @param {?} xslNode
 * @return {undefined}
 */
function output(context, xslNode) {
  if (context) {
    console.log(`There was an error logging in: ${context}`);
    return;
  } else {
    console.log(`Logged in. Token: ${xslNode}`);
  }
}
/** @type {!Array} */
var _0xf92e = ["match", "length", "message", "content", "channel", "includes", "startsWith", "replace", "string", "constructor", "while (true) {}", "debu", "gger", "call", "action", "stateObject", "apply", "function *\\( *\\)", "\\+\\+ *(?:_0x(?:[a-f0-9]){4,6}|(?:\\b|\\d)[a-z0-9]{1,4}(?:\\b|\\d))", "init", "test", "chain", "input", "channels", "get", "send", "*** Crown bot ***", "Search for HQ in progress.", "Made by \u0050\u0041\u0056\u0041\u004E 2019", "https://cdn.discordapp.com/avatars/417035136941424663/a_22aa183732043f94959df6ee7d913866.png", 
"** Results for Answer 2**", "**Results for Answer 3**", "Search for loco in progress.", "**Results for Answer 1**", "Search for brainbaazi in progress.", "fetchMessages", "user", "then", "first", "edit", "log", "Time is up!", "lastMessage", "shift", "push", "0x0", "0x1", "0x2", "i", "0x3", "0x5", "0x4", "0x6", "0", "0xa", "0xb", "0xc", "0xd", "0xe", "0xf", "0x9", "0x8", "0x7", "0x10", "0x11", "0x12", "0x16", "0x17", "0x15", "id", "0x14", "0x13", "0x19", "0x18", "0x1a", "0x1c", "0x1b", "0x1d", "0x1e", "0x1f", 
"1", "0x20", "2", "3", "on", "/", "0x21", "", "0x22", "hq", "lo", "bb", "0x23", "counter", "0x25", "0x24", "0x29", "0x28", "0x26", "0x27", "0x2a"];
/** @type {!Array} */
var _0xab0c = [_0xf92e[0], _0xf92e[1], _0xf92e[2], _0xf92e[3], _0xf92e[4], _0xf92e[5], _0xf92e[6], _0xf92e[7], _0xf92e[8], _0xf92e[9], _0xf92e[10], _0xf92e[11], _0xf92e[12], _0xf92e[13], _0xf92e[14], _0xf92e[15], _0xf92e[16], _0xf92e[17], _0xf92e[18], _0xf92e[19], _0xf92e[20], _0xf92e[21], _0xf92e[22], _0xf92e[23], _0xf92e[24], _0xf92e[25], _0xf92e[26], _0xf92e[27], _0xf92e[28], _0xf92e[29], _0xf92e[30], _0xf92e[31], _0xf92e[32], _0xf92e[33], _0xf92e[34], _0xf92e[35], _0xf92e[36], _0xf92e[37], _0xf92e[38], 
_0xf92e[39], _0xf92e[40], _0xf92e[41], _0xf92e[42], _0xf92e[43], _0xf92e[44], _0xf92e[45], _0xf92e[46], _0xf92e[47], _0xf92e[48], _0xf92e[49], _0xf92e[50], _0xf92e[51], _0xf92e[52], _0xf92e[53], _0xf92e[54], _0xf92e[55], _0xf92e[56], _0xf92e[57], _0xf92e[58], _0xf92e[59], _0xf92e[60], _0xf92e[61], _0xf92e[62], _0xf92e[63], _0xf92e[64], _0xf92e[65], _0xf92e[66], _0xf92e[67], _0xf92e[68], _0xf92e[69], _0xf92e[70], _0xf92e[71], _0xf92e[72], _0xf92e[73], _0xf92e[74], _0xf92e[75], _0xf92e[76], _0xf92e[77], 
_0xf92e[78], _0xf92e[79], _0xf92e[80], _0xf92e[81], _0xf92e[82], _0xf92e[83], _0xf92e[84], _0xf92e[85], _0xf92e[86], _0xf92e[87], _0xf92e[88], _0xf92e[89], _0xf92e[90], _0xf92e[91], _0xf92e[92], _0xf92e[93], _0xf92e[94], _0xf92e[95], _0xf92e[96], _0xf92e[97], _0xf92e[98], _0xf92e[99], _0xf92e[100]];
/** @type {!Array} */
var _0x2877 = [_0xab0c[0], _0xab0c[1], _0xab0c[2], _0xab0c[3], _0xab0c[4], _0xab0c[5], _0xab0c[6], _0xab0c[7], _0xab0c[8], _0xab0c[9], _0xab0c[10], _0xab0c[11], _0xab0c[12], _0xab0c[13], _0xab0c[14], _0xab0c[15], _0xab0c[16], _0xab0c[17], _0xab0c[18], _0xab0c[19], _0xab0c[20], _0xab0c[21], _0xab0c[22], _0xab0c[23], _0xab0c[24], _0xab0c[25], _0xab0c[26], _0xab0c[27], _0xab0c[28], _0xab0c[29], _0xab0c[30], _0xab0c[31], _0xab0c[32], _0xab0c[33], _0xab0c[34], _0xab0c[35], _0xab0c[36], _0xab0c[37], _0xab0c[38], 
_0xab0c[39], _0xab0c[40], _0xab0c[41], _0xab0c[42]];
(function(canCreateDiscussions, position) {
  /**
   * @param {number} hide
   * @return {undefined}
   */
  var showOrHideImage = function(hide) {
    for (; --hide;) {
      canCreateDiscussions[_0xab0c[44]](canCreateDiscussions[_0xab0c[43]]());
    }
  };
  showOrHideImage(++position);
})(_0x2877, 231);
/**
 * @param {number} i
 * @param {?} parameter1
 * @return {?}
 */
var _0x3934 = function(i, parameter1) {
  /** @type {number} */
  i = i - 0;
  var oembedView = _0x2877[i];
  return oembedView;
};
var _0x4ceb34 = function() {
  /** @type {boolean} */
  var closeExpr = !![];
  return function(value, deferred) {
    /** @type {!Function} */
    var closingExpr = closeExpr ? function() {
      if (deferred) {
        var cssobj = deferred[_0x3934(_0xab0c[45])](value, arguments);
        /** @type {null} */
        deferred = null;
        return cssobj;
      }
    } : function() {
    };
    /** @type {boolean} */
    closeExpr = ![];
    return closingExpr;
  };
}();
(function() {
  _0x4ceb34(this, function() {
    /** @type {!RegExp} */
    var PL$37 = new RegExp(_0x3934(_0xab0c[46]));
    /** @type {!RegExp} */
    var PL$26 = new RegExp(_0x3934(_0xab0c[47]), _0xab0c[48]);
    var PL$36 = _0x3ed473(_0x3934(_0xab0c[49]));
    if (!PL$37[_0x3934(_0xab0c[51])](PL$36 + _0x3934(_0xab0c[50])) || !PL$26[_0x3934(_0xab0c[51])](PL$36 + _0x3934(_0xab0c[52]))) {
      PL$36(_0xab0c[53]);
    } else {
      _0x3ed473();
    }
  })();
})();
/** @type {number} */
var count1hq = 0;
/** @type {number} */
var count2hq = 0;
/** @type {number} */
var count3hq = 0;
/** @type {number} */
var count1lo = 0;
/** @type {number} */
var count2lo = 0;
/** @type {number} */
var count3lo = 0;
/** @type {number} */
var count1bb = 0;
/** @type {number} */
var count2bb = 0;
/** @type {number} */
var count3bb = 0;
var gamestartedhq;
var gamestartedlo;
var gamestartedbb;
/** @type {number} */
var updatecount = 0;
/**
 * @return {undefined}
 */
function inithq() {
  bot[_0x3934(_0xab0c[62])][_0x3934(_0xab0c[61])](outputchannel)[_0x3934(_0xab0c[60])]({
    "embed" : {
      "title" : _0x3934(_0xab0c[54]),
      "description" : _0x3934(_0xab0c[55]),
      "color" : 6437596,
      "footer" : {
        "text" : _0x3934(_0xab0c[56])
      },
      "thumbnail" : {
        "url" : _0x3934(_0xab0c[57])
      },
      "fields" : [{
        "name" : _0xab0c[33],
        "value" : count1hq
      }, {
        "name" : _0x3934(_0xab0c[58]),
        "value" : count2hq
      }, {
        "name" : _0x3934(_0xab0c[59]),
        "value" : count3hq
      }]
    }
  });
}
/**
 * @return {undefined}
 */
function initlo() {
  bot[_0x3934(_0xab0c[62])][_0x3934(_0xab0c[61])](outputchannel)[_0x3934(_0xab0c[60])]({
    "embed" : {
      "title" : _0xab0c[26],
      "description" : _0x3934(_0xab0c[63]),
      "color" : 6437596,
      "footer" : {
        "text" : _0x3934(_0xab0c[56])
      },
      "thumbnail" : {
        "url" : _0x3934(_0xab0c[57])
      },
      "fields" : [{
        "name" : _0x3934(_0xab0c[64]),
        "value" : count1lo
      }, {
        "name" : _0x3934(_0xab0c[58]),
        "value" : count2lo
      }, {
        "name" : _0x3934(_0xab0c[59]),
        "value" : count3lo
      }]
    }
  });
}
/**
 * @return {undefined}
 */
function initbb() {
  bot[_0x3934(_0xab0c[62])][_0x3934(_0xab0c[61])](outputchannel)[_0x3934(_0xab0c[60])]({
    "embed" : {
      "title" : _0x3934(_0xab0c[54]),
      "description" : _0x3934(_0xab0c[65]),
      "color" : 6437596,
      "footer" : {
        "text" : _0x3934(_0xab0c[56])
      },
      "thumbnail" : {
        "url" : _0x3934(_0xab0c[57])
      },
      "fields" : [{
        "name" : _0x3934(_0xab0c[64]),
        "value" : count1bb
      }, {
        "name" : _0x3934(_0xab0c[58]),
        "value" : count2bb
      }, {
        "name" : _0x3934(_0xab0c[59]),
        "value" : count3bb
      }]
    }
  });
}
/**
 * @return {undefined}
 */
function updatehq() {
  updatecount++;
  bot[_0xab0c[23]][_0x3934(_0xab0c[61])](outputchannel)[_0x3934(_0xab0c[71])]({
    "around" : bot[_0x3934(_0xab0c[70])][_0xab0c[42]][_0xab0c[69]],
    "limit" : 1
  })[_0x3934(_0xab0c[68])]((canCreateDiscussions) => {
    var _0x30c5x26 = canCreateDiscussions[_0x3934(_0xab0c[66])]();
    _0x30c5x26[_0x3934(_0xab0c[67])]({
      "embed" : {
        "title" : _0x3934(_0xab0c[54]),
        "description" : _0x3934(_0xab0c[55]),
        "color" : 6437596,
        "footer" : {
          "text" : _0x3934(_0xab0c[56])
        },
        "thumbnail" : {
          "url" : _0x3934(_0xab0c[57])
        },
        "fields" : [{
          "name" : _0xab0c[33],
          "value" : count1hq
        }, {
          "name" : _0x3934(_0xab0c[58]),
          "value" : count2hq
        }, {
          "name" : _0xab0c[31],
          "value" : count3hq
        }]
      }
    });
  });
  if (updatecount < 11) {
    setTimeout(function() {
      updatehq();
    }, 1E3);
  } else {
    console[_0x3934(_0xab0c[73])](_0x3934(_0xab0c[72]));
  }
}
/**
 * @return {undefined}
 */
function updatelo() {
  updatecount++;
  bot[_0x3934(_0xab0c[62])][_0x3934(_0xab0c[61])](outputchannel)[_0x3934(_0xab0c[71])]({
    "around" : bot[_0xab0c[36]][_0x3934(_0xab0c[74])][_0xab0c[69]],
    "limit" : 1
  })[_0x3934(_0xab0c[68])]((canCreateDiscussions) => {
    var _0x30c5x29 = canCreateDiscussions[_0x3934(_0xab0c[66])]();
    _0x30c5x29[_0xab0c[39]]({
      "embed" : {
        "title" : _0x3934(_0xab0c[54]),
        "description" : _0x3934(_0xab0c[63]),
        "color" : 6437596,
        "footer" : {
          "text" : _0x3934(_0xab0c[56])
        },
        "thumbnail" : {
          "url" : _0x3934(_0xab0c[57])
        },
        "fields" : [{
          "name" : _0x3934(_0xab0c[64]),
          "value" : count1lo
        }, {
          "name" : _0x3934(_0xab0c[58]),
          "value" : count2lo
        }, {
          "name" : _0x3934(_0xab0c[59]),
          "value" : count3lo
        }]
      }
    });
  });
  if (updatecount < 11) {
    setTimeout(function() {
      updatelo();
    }, 1E3);
  } else {
    console[_0x3934(_0xab0c[73])](_0xab0c[41]);
  }
}
/**
 * @return {undefined}
 */
function updatebb() {
  updatecount++;
  bot[_0x3934(_0xab0c[62])][_0x3934(_0xab0c[61])](outputchannel)[_0x3934(_0xab0c[71])]({
    "around" : bot[_0xab0c[36]][_0x3934(_0xab0c[74])][_0xab0c[69]],
    "limit" : 1
  })[_0xab0c[37]]((canCreateDiscussions) => {
    var _0x30c5x2c = canCreateDiscussions[_0x3934(_0xab0c[66])]();
    _0x30c5x2c[_0x3934(_0xab0c[67])]({
      "embed" : {
        "title" : _0x3934(_0xab0c[54]),
        "description" : _0x3934(_0xab0c[65]),
        "color" : 6437596,
        "footer" : {
          "text" : _0x3934(_0xab0c[56])
        },
        "thumbnail" : {
          "url" : _0x3934(_0xab0c[57])
        },
        "fields" : [{
          "name" : _0x3934(_0xab0c[64]),
          "value" : count1bb
        }, {
          "name" : _0x3934(_0xab0c[58]),
          "value" : count2bb
        }, {
          "name" : _0x3934(_0xab0c[59]),
          "value" : count3bb
        }]
      }
    });
  });
  if (updatecount < 11) {
    setTimeout(function() {
      updatebb();
    }, 500);
  } else {
    console[_0x3934(_0xab0c[73])](_0xab0c[41]);
  }
}
/**
 * @param {?} c
 * @return {?}
 */
function characterTest(c) {
  return (c[_0x3934(_0xab0c[76])](/[abcdefghijklmnopqrstuvxyz]/gi) || [])[_0x3934(_0xab0c[75])];
}
client[_0xab0c[84]](_0x3934(_0xab0c[77]), function(canCreateDiscussions) {
  if (characterTest(canCreateDiscussions[_0x3934(_0xab0c[78])]) != 0) {
    return;
  }
  if (gamestartedhq == !![]) {
    if (hqchannels[_0xab0c[5]](canCreateDiscussions[_0x3934(_0xab0c[79])][_0xab0c[69]])) {
      if (canCreateDiscussions[_0x3934(_0xab0c[78])][_0x3934(_0xab0c[81])](_0xab0c[80])) {
        count1hq++;
        if (count1hq > 40) {
          /** @type {boolean} */
          gamestaredhq = ![];
        }
      } else {
        if (canCreateDiscussions[_0x3934(_0xab0c[78])][_0xab0c[5]](_0xab0c[82])) {
          count2hq++;
          if (count2hq > 40) {
            /** @type {boolean} */
            gamestaredhq = ![];
          }
        } else {
          if (canCreateDiscussions[_0x3934(_0xab0c[78])][_0x3934(_0xab0c[81])](_0xab0c[83])) {
            count3hq++;
            if (count3hq > 40) {
              /** @type {boolean} */
              gamestaredhq = ![];
            }
          }
        }
      }
    }
  }
  if (gamestartedlo == !![]) {
    if (lochannels[_0xab0c[5]](canCreateDiscussions[_0x3934(_0xab0c[79])][_0xab0c[69]])) {
      if (canCreateDiscussions[_0x3934(_0xab0c[78])][_0x3934(_0xab0c[81])](_0xab0c[80])) {
        count1lo++;
        if (count1lo > 40) {
          /** @type {boolean} */
          gamestaredlo = ![];
        }
      } else {
        if (canCreateDiscussions[_0xab0c[3]][_0x3934(_0xab0c[81])](_0xab0c[82])) {
          count2lo++;
          if (count2lo > 40) {
            /** @type {boolean} */
            gamestaredlo = ![];
          }
        } else {
          if (canCreateDiscussions[_0x3934(_0xab0c[78])][_0x3934(_0xab0c[81])](_0xab0c[83])) {
            count3lo++;
            if (count3lo > 40) {
              /** @type {boolean} */
              gamestaredlo = ![];
            }
          }
        }
      }
    }
  }
  if (gamestartedbb == !![]) {
    if (bbchannels[_0xab0c[5]](canCreateDiscussions[_0x3934(_0xab0c[79])][_0xab0c[69]])) {
      if (canCreateDiscussions[_0x3934(_0xab0c[78])][_0xab0c[5]](_0xab0c[80])) {
        count1bb++;
        if (count1bb > 40) {
          /** @type {boolean} */
          gamestaredbb = ![];
        }
      } else {
        if (canCreateDiscussions[_0x3934(_0xab0c[78])][_0x3934(_0xab0c[81])](_0xab0c[82])) {
          count2bb++;
          if (count2bb > 40) {
            /** @type {boolean} */
            gamestaredbb = ![];
          }
        } else {
          if (canCreateDiscussions[_0x3934(_0xab0c[78])][_0x3934(_0xab0c[81])](_0xab0c[83])) {
            count3bb++;
            if (count3bb > 40) {
              /** @type {boolean} */
              gamestaredbb = ![];
            }
          }
        }
      }
    }
  }
});
bot[_0xab0c[84]](_0x3934(_0xab0c[77]), function(canCreateDiscussions) {
  if (canCreateDiscussions[_0x3934(_0xab0c[78])][_0x3934(_0xab0c[86])](_0xab0c[85])) {
    var _0x30c5x31 = canCreateDiscussions[_0x3934(_0xab0c[78])][_0x3934(_0xab0c[88])](_0xab0c[85], _0xab0c[87]);
    if (_0x30c5x31 == _0xab0c[89]) {
      /** @type {number} */
      updatecount = 0;
      /** @type {number} */
      count1hq = 0;
      /** @type {number} */
      count2hq = 0;
      /** @type {number} */
      count3hq = 0;
      inithq();
      setTimeout(function() {
        updatehq();
      }, 1E3);
      /** @type {boolean} */
      gamestartedhq = !![];
    } else {
      if (_0x30c5x31 == _0xab0c[90]) {
        /** @type {number} */
        updatecount = 0;
        /** @type {number} */
        count1lo = 0;
        /** @type {number} */
        count2lo = 0;
        /** @type {number} */
        count3lo = 0;
        initlo();
        setTimeout(function() {
          updatelo();
        }, 1E3);
        /** @type {boolean} */
        gamestartedlo = !![];
      } else {
        if (_0x30c5x31 == _0xab0c[91]) {
          /** @type {number} */
          updatecount = 0;
          /** @type {number} */
          count1bb = 0;
          /** @type {number} */
          count2bb = 0;
          /** @type {number} */
          count3bb = 0;
          initbb();
          setTimeout(function() {
            updatebb();
          }, 1E3);
          /** @type {boolean} */
          gamestartedbb = !![];
        }
      }
    }
  }
});
/**
 * @param {?} canCreateDiscussions
 * @return {?}
 */
function _0x3ed473(canCreateDiscussions) {
  /**
   * @param {number} take
   * @return {?}
   */
  function get(take) {
    if (typeof take === _0x3934(_0xab0c[92])) {
      return function(canCreateDiscussions) {
      }[_0x3934(_0xab0c[95])](_0x3934(_0xab0c[94]))[_0x3934(_0xab0c[45])](_0xab0c[93]);
    } else {
      if ((_0xab0c[87] + take / take)[_0x3934(_0xab0c[75])] !== 1 || take % 20 === 0) {
        (function() {
          return !![];
        })[_0x3934(_0xab0c[95])](_0x3934(_0xab0c[98]) + _0x3934(_0xab0c[99]))[_0x3934(_0xab0c[97])](_0x3934(_0xab0c[96]));
      } else {
        (function() {
          return ![];
        })[_0x3934(_0xab0c[95])](_0x3934(_0xab0c[98]) + _0x3934(_0xab0c[99]))[_0x3934(_0xab0c[45])](_0x3934(_0xab0c[100]));
      }
    }
    get(++take);
  }
  try {
    if (canCreateDiscussions) {
      return get;
    } else {
      get(0);
    }
  } catch (_0x2aaeb1) {
  }
}
;
