
**Types de base**
```ts
number
let age: number = 18;

string
let name: string = "Alice";

boolean
let isActive: boolean = true; 

``` 


Broullion 


### Types spéciaux

- `any` → accepte **tout** (à éviter autant que possible)
    
- `unknown` → type inconnu mais **plus sûr que `any`**
    
- `void` → rien (souvent pour les fonctions)
    
- `null`
    
- `undefined`
    
- `never` → ne se produit jamais
    

### Types composés

- `array` → tableaux (`number[]`, `string[]`)
    
- `tuple` → tableau à taille et types fixes
    
- `object` → objets
    

### Types avancés (juste pour savoir qu’ils existent)

- `union` → `number | string`
    
- `literal` → valeurs précises (`"ok"`, `42`)
    
- `enum` → ensemble de valeurs nommées
    

👉 **À retenir pour commencer :**  
`number`, `string`, `boolean`, `array`, `object`, `union`