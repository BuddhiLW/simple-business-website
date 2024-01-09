(ns playground.recipes.subs
  (:require
   [re-frame.core :as rf]
   [playground.db :refer [initial-app-db]]))
    ;; playgro]))


(rf/reg-sub
 :cursos
 (fn [db _]
   (js/console.log (clj->js (:cursos initial-app-db)))
   (:cursos initial-app-db)))

(rf/reg-sub
 :filter/draft
 :<- [:cursos]
 :<- [:uid]
 (fn [[recipes uid] _]
   (let [filters [#(= (:public? %) false) #(= (:cook %) uid)]]
     (filter (apply every-pred filters) (vals recipes)))))

(rf/reg-sub
 :filter/public
 :<- [:cursos]
 (fn [cursos _]
   (let [filtered (filter #(= (:public %) true) (vals cursos)) ;;
         log (js/console.log (str "filtered: " (clj->js filtered)))]
     filtered)))
   

(rf/reg-sub
 :recipe/author?
 :<- [:cursos/recipe]
 :<- [:auth/current-user]
 (fn [[{:keys [cook]} uid] _]
   (= cook uid)))

(rf/reg-sub
 :cursos/active-modal
 (fn [db _]
   (get-in db [:nav :active-modal])))

(rf/reg-sub
 :recipe/ingredients
 :<- [:cursos/recipe]
 (fn [recipe _]
   (->> (:ingredients recipe)
        (vals)
        (sort-by :order))))

(rf/reg-sub
 :recipe/steps
 :<- [:cursos/recipe]
 (fn [recipe _]
   (->> (:steps recipe)
        (vals)
        (sort-by :order))))

#_(rf/reg-fx
   :recipe/update-recipe
   (fn [{:keys [db]} [_ recipe-id values]]
     (let [recipe (get-in db [:cursos recipe-id])]
       {:db (update-in db [:cursos recipe-id] merge values)
        :dispatch [:cursos/close-modal]})))
(rf/reg-sub
 :recipe/ingredient
 (fn [db [_ id-ingredient]]
   (let [active-recipe (get-in db [:nav :active-recipe])]
     (get-in db [:cursos active-recipe :ingredients id-ingredient]))))

(rf/reg-sub
 :recipe/public?
 (fn [db [_]]
   (let [active-recipe (get-in db [:nav :active-recipe])]
     (get-in db [:cursos active-recipe :public?]))))

(rf/reg-sub
 :cursos/saved
 :<- [:cursos]
 :<- [:cursos/user]
 (fn [[recipes user] _]
   (let [saved (:saved user)]
     (filter #(contains? saved (:id %)) (vals recipes)))))

(rf/reg-sub
 :cursos/loaded?
 (fn [db [_]]
   (let [log (js/console.log "recipes loaded?" (not (get-in db [:loading :cursos])))]
     (not (get-in db [:loading :cursos])))))
