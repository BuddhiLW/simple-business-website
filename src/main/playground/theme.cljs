(ns playground.theme
  (:require
   [clojure.string :as string]
   ["@mui/material/styles" :refer [createTheme]]))
   ;; ["react-bootstrap" :as bt]))

;; (def cheffy-theme
;;   [:<>
;;    [:> bt/style
;;     {:black "#243B53"
;;      :primary "#27AB83"
;;      :secondary "#F2F2F2"
;;      :light "#F2F2F2"
;;      :dark "#243B53"
;;      :borderRadius "14px"
;;      :borderRadiusSm "8px"
;;      :borderRadiusLg "20px"
;;      :modalHeaderBorderColor "white"}]])
;; (string/join ", " ["a" "b" "c" "d" "e"])

(def theme (createTheme
            (clj->js
             {:typography {:fontFamily (string/join ","
                                                    ["Playfair Display"])}
              :palette
               {:primary
                {:main "#BBA987"
                 :black "#130905"
                 :primary "#27AB83"
                 :secondary "#F7D070"
                 :light "#D9E2EC"
                 :dark "#2F3FFF"
                 :white "#FFFAFA"
                 :form "#F8F8FF"
                 :main-background "#C8C095" ;; #AA9F63
                 :borderRadius "20px"
                 :borderRadiusSm "10px"
                 :borderRadiusLg "18px"
                 :modalHeaderBorderColor "white"}}
               {:secondary
                {:main "#651fff"
                 :light "#0066ff"
                 :dark "#ff5500"
                 :contrastText "#ffcc00"}}
               {:tertiary
                {:main "#e91e63"}}
               {:card-title
                {:main "#FFEFEF"}}
               {:card-title
                {:main "#FFEFEF"}}})))

(def buttons (createTheme
              (clj->js
               {:components
                {:MuiButton
                 {:styleOverrides
                  {:root
                   {:primary "#ff002b"
                    :font-size "1.2rem"}}}}})))
;; #ff00aa
;; #00ff55
;; #d400ff
;; #ff002b
;; #ff5500
;; #aaff00

(def nav (createTheme
          (clj->js
           {:components
            {:MuiTypography
             {:styleOverrides
              {:root
               {:breakpoints
                 {:xs
                  {:font-size "1rem"}
                  :sm
                  {::font-size "1.2rem"}
                  :md
                  {::font-size "1.4rem"}}}}}}
            :palette
            {:primary
             {:main "#000"
              :secondary "#FFFAFA"
              :tertiary "#F0EBE3"}}})))

(def cards (createTheme
            (clj->js
             {:palette
              {:primary
                {:main "#3A3F3F"
                 :light "#FFFAFA"}}})))


(def footer-theme (createTheme
                   (clj->js
                    {:components
                     {:MuiTypography
                      {:styleOverrides
                       {:root
                        {:font-size "1.2rem"}}}}
                     :palette
                     {:primary
                      {:main "#F0EBE3"
                       :contrast "#BBA987"
                       :main-background "#000000"
                       :tertiary "#4433FF"}}})))

