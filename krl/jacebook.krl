ruleset jacebook {
  meta {
    shares __testing, hit
  }

  global {
    __testing = { "queries":
      [ { "name": "__testing" }
      , { "name": "hit" }
      ] , "events":
      [ { "domain": "blackjack", "type": "shuffle" }
      ]
    }

  }

}
