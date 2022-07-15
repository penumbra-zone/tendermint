(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{712:function(e,t,s){"use strict";s.r(t);var o=s(1),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"pbts-system-model-and-properties-first-draft"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pbts-system-model-and-properties-first-draft"}},[e._v("#")]),e._v(" PBTS: System Model and Properties (first draft)")]),e._v(" "),s("p",[e._v("This specification is "),s("strong",[e._v("OUTDATED")]),e._v(". Please refer to the "),s("RouterLink",{attrs:{to:"/spec/consensus/proposer-based-timestamp/pbts-sysmodel_002_draft.html"}},[e._v("new version")]),e._v(".")],1),e._v(" "),s("h2",{attrs:{id:"system-model"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#system-model"}},[e._v("#")]),e._v(" System Model")]),e._v(" "),s("h3",{attrs:{id:"time-and-clocks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#time-and-clocks"}},[e._v("#")]),e._v(" Time and Clocks")]),e._v(" "),s("h4",{attrs:{id:"pbts-clock-newton-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pbts-clock-newton-0"}},[e._v("#")]),e._v(" "),s("strong",[e._v("[PBTS-CLOCK-NEWTON.0]")])]),e._v(" "),s("p",[e._v("There is a reference Newtonian real-time "),s("code",[e._v("t")]),e._v(" (UTC).")]),e._v(" "),s("p",[e._v("Every correct validator "),s("code",[e._v("V")]),e._v(" maintains a synchronized clock "),s("code",[e._v("C_V")]),e._v(" that ensures:")]),e._v(" "),s("h4",{attrs:{id:"pbts-clock-precision-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pbts-clock-precision-0"}},[e._v("#")]),e._v(" "),s("strong",[e._v("[PBTS-CLOCK-PRECISION.0]")])]),e._v(" "),s("p",[e._v("There exists a system parameter "),s("code",[e._v("PRECISION")]),e._v(" such that for any two correct validators "),s("code",[e._v("V")]),e._v(" and "),s("code",[e._v("W")]),e._v(", and at any real-time "),s("code",[e._v("t")]),e._v(","),s("br"),e._v(" "),s("code",[e._v("|C_V(t) - C_W(t)| < PRECISION")])]),e._v(" "),s("h3",{attrs:{id:"message-delays"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#message-delays"}},[e._v("#")]),e._v(" Message Delays")]),e._v(" "),s("p",[e._v("We do not want to interfere with the Tendermint timing assumptions. We will postulate a timing restriction, which, if satisfied, ensures that liveness is preserved.")]),e._v(" "),s("p",[e._v("In general the local clock may drift from the global time. (It may progress faster, e.g., one second of clock time might take 1.005 seconds of real-time). As a result the local clock and the global clock may be measured in different time units. Usually, the message delay is measured in global clock time units. To estimate the correct local timeout precisely, we would need to estimate the clock time duration of a message delay taking into account the clock drift. For simplicity we ignore this, and directly postulate the message delay assumption in terms of local time.")]),e._v(" "),s("h4",{attrs:{id:"pbts-msg-d-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pbts-msg-d-0"}},[e._v("#")]),e._v(" "),s("strong",[e._v("[PBTS-MSG-D.0]")])]),e._v(" "),s("p",[e._v("There exists a system parameter "),s("code",[e._v("MSGDELAY")]),e._v(" for message end-to-end delays "),s("strong",[e._v("counted in clock-time")]),e._v(".")]),e._v(" "),s("blockquote",[s("p",[e._v("Observe that [PBTS-MSG-D.0] imposes constraints on message delays as well as on the clock.")])]),e._v(" "),s("h4",{attrs:{id:"pbts-msg-fair-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pbts-msg-fair-0"}},[e._v("#")]),e._v(" "),s("strong",[e._v("[PBTS-MSG-FAIR.0]")])]),e._v(" "),s("p",[e._v("The message end-to-end delay between a correct proposer and a correct validator (for "),s("code",[e._v("PROPOSE")]),e._v(" messages) is less than "),s("code",[e._v("MSGDELAY")]),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"problem-statement"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#problem-statement"}},[e._v("#")]),e._v(" Problem Statement")]),e._v(" "),s("p",[e._v("In this section we define the properties of Tendermint consensus (cf. the "),s("a",{attrs:{href:"https://arxiv.org/abs/1807.04938",target:"_blank",rel:"noopener noreferrer"}},[e._v("arXiv paper"),s("OutboundLink")],1),e._v(") in this new system model.")]),e._v(" "),s("h4",{attrs:{id:"pbts-propose-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pbts-propose-0"}},[e._v("#")]),e._v(" "),s("strong",[e._v("[PBTS-PROPOSE.0]")])]),e._v(" "),s("p",[e._v("A proposer proposes a pair "),s("code",[e._v("(v,t)")]),e._v(" of consensus value "),s("code",[e._v("v")]),e._v(" and time "),s("code",[e._v("t")]),e._v(".")]),e._v(" "),s("blockquote",[s("p",[e._v("We then restrict the allowed decisions along the following lines:")])]),e._v(" "),s("h4",{attrs:{id:"pbts-inv-agreement-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pbts-inv-agreement-0"}},[e._v("#")]),e._v(" "),s("strong",[e._v("[PBTS-INV-AGREEMENT.0]")])]),e._v(" "),s("p",[e._v("[Agreement] No two correct validators decide on different values "),s("code",[e._v("v")]),e._v(".")]),e._v(" "),s("h4",{attrs:{id:"pbts-inv-time-val-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pbts-inv-time-val-0"}},[e._v("#")]),e._v(" "),s("strong",[e._v("[PBTS-INV-TIME-VAL.0]")])]),e._v(" "),s("p",[e._v("[Time-Validity] If a correct validator decides on "),s("code",[e._v("t")]),e._v(" then "),s("code",[e._v("t")]),e._v(' is "OK" (we will formalize this below), even if up to '),s("code",[e._v("2f")]),e._v(" validators are faulty.")]),e._v(" "),s("p",[e._v("However, the properties of Tendermint consensus are of more interest with respect to the blocks, that is, what is written into a block and when. We therefore, in the following, will give the safety and liveness properties from this block-centric viewpoint."),s("br"),e._v("\nFor this, observe that the time "),s("code",[e._v("t")]),e._v(" decided at consensus height "),s("code",[e._v("k")]),e._v(" will be written in the block of height "),s("code",[e._v("k+1")]),e._v(", and will be supported by "),s("code",[e._v("2f + 1")]),e._v(" "),s("code",[e._v("PRECOMMIT")]),e._v(" messages of the same consensus round "),s("code",[e._v("r")]),e._v(". The time written in the block, we will denote by "),s("code",[e._v("b.time")]),e._v(" (to distinguish it from the term "),s("code",[e._v("bfttime")]),e._v(" used for median-based time). For this, it is important to have the following consensus algorithm property:")]),e._v(" "),s("h4",{attrs:{id:"pbts-inv-time-agr-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pbts-inv-time-agr-0"}},[e._v("#")]),e._v(" "),s("strong",[e._v("[PBTS-INV-TIME-AGR.0]")])]),e._v(" "),s("p",[e._v("[Time-Agreement] If two correct validators decide in the same round, then they decide on the same "),s("code",[e._v("t")]),e._v(".")]),e._v(" "),s("h4",{attrs:{id:"pbts-decision-round-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pbts-decision-round-0"}},[e._v("#")]),e._v(" "),s("strong",[e._v("[PBTS-DECISION-ROUND.0]")])]),e._v(" "),s("p",[e._v("Note that the relation between consensus decisions, on the one hand, and blocks, on the other hand, is not immediate; in particular if we consider time: In the proposed solution,\nas validators may decide in different rounds, they may decide on different times.\nThe proposer of the next block, may pick a commit (at least "),s("code",[e._v("2f + 1")]),e._v(" "),s("code",[e._v("PRECOMMIT")]),e._v(' messages from one round), and thus it picks a decision round that is going to become "canonic".\nAs a result, the proposer implicitly has a choice of one of the times that belong to rounds in which validators decided. Observe that this choice was implicitly the case already in the median-based '),s("code",[e._v("bfttime")]),e._v(".\nHowever, as most consensus instances terminate within one round on the Cosmos hub, this is hardly ever observed in practice.")]),e._v(" "),s("p",[e._v("Finally, observe that the agreement ([Agreement] and [Time-Agreement]) properties are based on the Tendermint security model [TMBC-FM-2THIRDS.0] of more than 2/3 correct validators, while [Time-Validity] is based on more than 1/3 correct validators.")]),e._v(" "),s("h3",{attrs:{id:"safety"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#safety"}},[e._v("#")]),e._v(" SAFETY")]),e._v(" "),s("p",[e._v("Here we will provide specifications that relate local time to block time. However, since we do not assume (by now) that local time is linked to real-time, these specifications also do not provide a relation between block time and real-time. Such properties are given "),s("a",{attrs:{href:"#REAL-TIME-SAFETY"}},[e._v("later")]),e._v(".")]),e._v(" "),s("p",[e._v("For a correct validator "),s("code",[e._v("V")]),e._v(", let "),s("code",[e._v("beginConsensus(V,k)")]),e._v(" be the local time when it sets its height to "),s("code",[e._v("k")]),e._v(", and let "),s("code",[e._v("endConsensus(V,k)")]),e._v(" be the time when it sets its height to "),s("code",[e._v("k + 1")]),e._v(".")]),e._v(" "),s("p",[e._v("Let")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("beginConsensus(k)")]),e._v(" be the minimum over "),s("code",[e._v("beginConsensus(V,k)")]),e._v(", and")]),e._v(" "),s("li",[s("code",[e._v("last-beginConsensus(k)")]),e._v(" be the maximum over "),s("code",[e._v("beginConsensus(V,k)")]),e._v(", and")]),e._v(" "),s("li",[s("code",[e._v("endConsensus(k)")]),e._v(" the maximum over "),s("code",[e._v("endConsensus(V,k)")])])]),e._v(" "),s("p",[e._v("for all correct validators "),s("code",[e._v("V")]),e._v(".")]),e._v(" "),s("blockquote",[s("p",[e._v("Observe that "),s("code",[e._v("beginConsensus(k) <= last-beginConsensus(k)")]),e._v(" and if local clocks are monotonic, then "),s("code",[e._v("last-beginConsensus(k) <= endConsensus(k)")]),e._v(".")])]),e._v(" "),s("h4",{attrs:{id:"pbts-clock-grow-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pbts-clock-grow-0"}},[e._v("#")]),e._v(" "),s("strong",[e._v("[PBTS-CLOCK-GROW.0]")])]),e._v(" "),s("p",[e._v("We assume that during one consensus instance, local clocks are not set back, in particular for each correct validator "),s("code",[e._v("V")]),e._v(" and each height "),s("code",[e._v("k")]),e._v(", we have "),s("code",[e._v("beginConsensus(V,k) < endConsensus(V,k)")]),e._v(".")]),e._v(" "),s("h4",{attrs:{id:"pbts-consensus-time-valid-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pbts-consensus-time-valid-0"}},[e._v("#")]),e._v(" "),s("strong",[e._v("[PBTS-CONSENSUS-TIME-VALID.0]")])]),e._v(" "),s("p",[e._v("If")]),e._v(" "),s("ul",[s("li",[e._v("there is a valid commit "),s("code",[e._v("c")]),e._v(" for height "),s("code",[e._v("k")]),e._v(", and")]),e._v(" "),s("li",[s("code",[e._v("c")]),e._v(" contains a "),s("code",[e._v("PRECOMMIT")]),e._v(" message by at least one correct validator,")])]),e._v(" "),s("p",[e._v("then the time "),s("code",[e._v("b.time")]),e._v(" in the block "),s("code",[e._v("b")]),e._v(" that is signed by "),s("code",[e._v("c")]),e._v(" satisfies")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("beginConsensus(k) - PRECISION <= b.time < endConsensus(k) + PRECISION + MSGDELAY")]),e._v(".")])]),e._v(" "),s("blockquote",[s("p",[e._v("[PBTS-CONSENSUS-TIME-VALID.0] is based on an analysis where the proposer is faulty (and does does not count towards "),s("code",[e._v("beginConsensus(k)")]),e._v(" and "),s("code",[e._v("endConsensus(k)")]),e._v("), and we estimate the times at which correct validators receive and "),s("code",[e._v("accept")]),e._v(" the "),s("code",[e._v("propose")]),e._v(" message. If the proposer is correct we obtain")])]),e._v(" "),s("h4",{attrs:{id:"pbts-consensus-live-valid-corr-prop-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pbts-consensus-live-valid-corr-prop-0"}},[e._v("#")]),e._v(" "),s("strong",[e._v("[PBTS-CONSENSUS-LIVE-VALID-CORR-PROP.0]")])]),e._v(" "),s("p",[e._v("If the proposer of round 1 is correct, and")]),e._v(" "),s("ul",[s("li",[e._v("[TMBC-FM-2THIRDS.0] holds for a block of height "),s("code",[e._v("k - 1")]),e._v(", and")]),e._v(" "),s("li",[e._v("[PBTS-MSG-FAIR.0], and")]),e._v(" "),s("li",[e._v("[PBTS-CLOCK-PRECISION.0], and")]),e._v(" "),s("li",[e._v("[PBTS-CLOCK-GROW.0] ("),s("strong",[e._v("TODO:")]),e._v(" is that enough?)")])]),e._v(" "),s("p",[e._v("then eventually (within bounded time) every correct validator decides in round 1.")]),e._v(" "),s("h4",{attrs:{id:"pbts-consensus-safe-valid-corr-prop-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pbts-consensus-safe-valid-corr-prop-0"}},[e._v("#")]),e._v(" "),s("strong",[e._v("[PBTS-CONSENSUS-SAFE-VALID-CORR-PROP.0]")])]),e._v(" "),s("p",[e._v("If the proposer of round 1 is correct, and")]),e._v(" "),s("ul",[s("li",[e._v("[TMBC-FM-2THIRDS.0] holds for a block of height "),s("code",[e._v("k - 1")]),e._v(", and")]),e._v(" "),s("li",[e._v("[PBTS-MSG-FAIR.0], and")]),e._v(" "),s("li",[e._v("[PBTS-CLOCK-PRECISION.0], and")]),e._v(" "),s("li",[e._v("[PBTS-CLOCK-GROW.0] ("),s("strong",[e._v("TODO:")]),e._v(" is that enough?)")])]),e._v(" "),s("p",[e._v("then "),s("code",[e._v("beginConsensus_k <= b.time <= last-beginConsensus_k")]),e._v(".")]),e._v(" "),s("blockquote",[s("p",[e._v("For the above two properties we will assume that a correct proposer "),s("code",[e._v("v")]),e._v(" sends its "),s("code",[e._v("PROPOSAL")]),e._v(" at its local time "),s("code",[e._v("beginConsensus(v,k)")]),e._v(".")])]),e._v(" "),s("h3",{attrs:{id:"liveness"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#liveness"}},[e._v("#")]),e._v(" LIVENESS")]),e._v(" "),s("p",[e._v("If")]),e._v(" "),s("ul",[s("li",[e._v("[TMBC-FM-2THIRDS.0] holds for a block of height "),s("code",[e._v("k - 1")]),e._v(", and")]),e._v(" "),s("li",[e._v("[PBTS-MSG-FAIR.0],")]),e._v(" "),s("li",[e._v("[PBTS-CLOCK.0], and")]),e._v(" "),s("li",[e._v("[PBTS-CLOCK-GROW.0] ("),s("strong",[e._v("TODO:")]),e._v(" is that enough?)")])]),e._v(" "),s("p",[e._v("then eventually there is a valid commit "),s("code",[e._v("c")]),e._v(" for height "),s("code",[e._v("k")]),e._v(".")]),e._v(" "),s("h3",{attrs:{id:"real-time-safety"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#real-time-safety"}},[e._v("#")]),e._v(" REAL-TIME SAFETY")]),e._v(" "),s("blockquote",[s("p",[e._v("We want to give a property that can be exploited from the outside, that is, given a block with some time stored in it, what is the estimate at which real-time the block was generated. To do so, we need to link clock-time to real-time; which is not the case with [PBTS-CLOCK.0]. For this, we introduce the following assumption on the clocks:")])]),e._v(" "),s("h4",{attrs:{id:"pbts-clocksync-external-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pbts-clocksync-external-0"}},[e._v("#")]),e._v(" "),s("strong",[e._v("[PBTS-CLOCKSYNC-EXTERNAL.0]")])]),e._v(" "),s("p",[e._v("There is a system parameter "),s("code",[e._v("ACCURACY")]),e._v(", such that for all real-times "),s("code",[e._v("t")]),e._v(" and all correct validators "),s("code",[e._v("V")]),e._v(",")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("| C_V(t) - t | < ACCURACY")]),e._v(".")])]),e._v(" "),s("blockquote",[s("p",[s("code",[e._v("ACCURACY")]),e._v(" is not necessarily visible at the code level. The properties below just show that the smaller\nits value, the closer the block time will be to real-time")])]),e._v(" "),s("h4",{attrs:{id:"pbts-consensus-ptime-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pbts-consensus-ptime-0"}},[e._v("#")]),e._v(" "),s("strong",[e._v("[PBTS-CONSENSUS-PTIME.0]")])]),e._v(" "),s("p",[e._v("LET "),s("code",[e._v("m")]),e._v(" be a propose message. We consider the following two real-times "),s("code",[e._v("proposalTime(m)")]),e._v(" and "),s("code",[e._v("propRecvTime(m)")]),e._v(":")]),e._v(" "),s("ul",[s("li",[e._v("if the proposer is correct and sends "),s("code",[e._v("m")]),e._v(" at time "),s("code",[e._v("t")]),e._v(", we write "),s("code",[e._v("proposalTime(m)")]),e._v(" for real-time "),s("code",[e._v("t")]),e._v(".")]),e._v(" "),s("li",[e._v("if first correct validator receives "),s("code",[e._v("m")]),e._v(" at time "),s("code",[e._v("t")]),e._v(", we write "),s("code",[e._v("propRecvTime(m)")]),e._v(" for real-time "),s("code",[e._v("t")]),e._v(".")])]),e._v(" "),s("h4",{attrs:{id:"pbts-consensus-realtime-valid-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pbts-consensus-realtime-valid-0"}},[e._v("#")]),e._v(" "),s("strong",[e._v("[PBTS-CONSENSUS-REALTIME-VALID.0]")])]),e._v(" "),s("p",[e._v("Let "),s("code",[e._v("b")]),e._v(" be a block with a valid commit that contains at least one "),s("code",[e._v("precommit")]),e._v(" message by a correct validator (and "),s("code",[e._v("proposalTime")]),e._v(" is the time for the height/round "),s("code",[e._v("propose")]),e._v(" message "),s("code",[e._v("m")]),e._v(" that triggered the "),s("code",[e._v("precommit")]),e._v("). Then:")]),e._v(" "),s("p",[s("code",[e._v("propRecvTime(m) - ACCURACY - PRECISION < b.time < propRecvTime(m) + ACCURACY + PRECISION + MSGDELAY")])]),e._v(" "),s("h4",{attrs:{id:"pbts-consensus-realtime-valid-corr-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pbts-consensus-realtime-valid-corr-0"}},[e._v("#")]),e._v(" "),s("strong",[e._v("[PBTS-CONSENSUS-REALTIME-VALID-CORR.0]")])]),e._v(" "),s("p",[e._v("Let "),s("code",[e._v("b")]),e._v(" be a block with a valid commit that contains at least one "),s("code",[e._v("precommit")]),e._v(" message by a correct validator (and "),s("code",[e._v("proposalTime")]),e._v(" is the time for the height/round "),s("code",[e._v("propose")]),e._v(" message "),s("code",[e._v("m")]),e._v(" that triggered the "),s("code",[e._v("precommit")]),e._v("). Then, if the proposer is correct:")]),e._v(" "),s("p",[s("code",[e._v("proposalTime(m) - ACCURACY < b.time < proposalTime(m) + ACCURACY")])]),e._v(" "),s("blockquote",[s("p",[e._v("by the algorithm at time "),s("code",[e._v("proposalTime(m)")]),e._v(" the proposer fixes "),s("code",[e._v("m.time <- now_p(proposalTime(m))")])])]),e._v(" "),s("blockquote",[s("p",[e._v('"triggered the '),s("code",[e._v("PRECOMMIT")]),e._v('" implies that the data in '),s("code",[e._v("m")]),e._v(" and "),s("code",[e._v("b")]),e._v(' are "matching", that is, '),s("code",[e._v("m")]),e._v(" proposed the values that are actually stored in "),s("code",[e._v("b")]),e._v(".")])]),e._v(" "),s("p",[e._v("Back to "),s("RouterLink",{attrs:{to:"/spec/consensus/proposer-based-timestamp/v1/pbts_001_draft.html"}},[e._v("main document")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=a.exports}}]);